/**
 * @summary Crops Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @Kcaparas
 */

import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import ComponentText from '@Constants/ComponentText';
import Button from '@Commons/Button/Button';
import CropsInitialDetails from '@Constants/InitialCropsDetails';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import { SubmissionCropsInterface } from 'src/Interface/CropsDetailsInterface';
import { CROPS_INFORMATION } from '@Constants/ModuleIDs';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import {
  CropIDOptions,
  PlantAgeOptions,
  PlantsPerAcre,
  DistanceBtwnPlants,
  DistanceBtwnRows,
  YesOrNo,
  WherePruningsGo,
} from '@Constants/CropOptions';
import CustomField from '@Commons/Input/Field/CustomField';
import {
  StyledFarmInfo,
  StyledButtonGroupContainer,
  StyledAreaContainer,
} from '@Commons/FormStyles.styles';
import CropsButtonGroup from './CropsButtonGroup';
import {
  StyledCropsSmallGroup,
  StyledCropsLargeGroup,
  StyledAddCancelButtonGroup,
} from './CropsInfo.styles';
import CropsList from './CropsList';

const CropsInfoComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
  updateNutrientDetails,
}) => {
  const [, setFieldsInfo] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [cropIndex, setCropIndex] = useState(0);
  const [initialFieldValues, setInitialFieldValues] = useState(CropsInitialDetails);
  // Only triggered once, it would show list and persists.
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  // Would trigger when new field button is clicked.
  const [isButtonDisplayed, setButtonDisplayed] = useState<boolean>(false);
  const [hasFieldBeenSelected, setFieldSelected] = useState<boolean[]>(
    Array(farmDetails.Fields.length).fill(false),
  );
  const BlueberrySchemaNumber = (cropId: string, message: string = 'Required') => Yup.number().when(cropId, (value, schema) => (value.toString() === 'Blueberry' ? schema.required(message) : schema.notRequired()));
  const BlueberrySchemaString = (cropId: string, message: string = 'Required') => Yup.string().when(cropId, (value, schema) => (value.toString() === 'Blueberry' ? schema.required(message) : schema.notRequired()));
  const validationSchema = Yup.object().shape({
    cropId: Yup.string().required('Required'),
    yield: Yup.number().positive().max(100).required('Required'),
    plantAgeYears: BlueberrySchemaString('cropId'),
    numberOfPlantsPerAcre: BlueberrySchemaNumber('cropId'),
    distanceBtwnPlants: BlueberrySchemaString('cropId'),
    distanceBtwnRows: BlueberrySchemaString('cropId'),
    willPlantsBePruned: Yup.boolean().required('Required'),
    whereWillPruningsGo: Yup.string().required('Required'),
    willSawdustBeApplied: Yup.boolean().required('Required'),
  });

  const distanceBtwnPlantsRowsDataAppend = (values: SubmissionCropsInterface): string => {
    const distanceCombination = `${values.distanceBtwnPlants}x${values.distanceBtwnRows}`;

    switch (distanceCombination) {
      case '0.6x2.7':
        return '(2ft x 9ft)';
      case '0.6x3.0':
        return '(2ft x 10ft)';
      case '0.75x2.7':
        return '(2.5ft x 9ft)';
      case '0.75x3.0':
        return '(2.5ft x 10ft)';
      case '0.9x2.7':
        return '(3ft x 9ft)';
      case '0.9x3.0':
        return '(3ft x 10ft)';
      default:
        break;
    }
    return '';
  };
  const addFieldData = (values: SubmissionCropsInterface, index: number): void => {
    setTimeout(() => {
      const farmInfo: FarmDetailsInterface = { ...farmDetails };
      farmInfo.Fields[fieldIndex].Crops.push({
        id: cropIndex,
        cropId: values.cropId,
        yield: values.yield,
        plantAgeYears: values.plantAgeYears,
        numberOfPlantsPerAcre: values.numberOfPlantsPerAcre,
        distanceBtwnPlantsRows: `${values.distanceBtwnPlants} m x ${values.distanceBtwnRows} m ${distanceBtwnPlantsRowsDataAppend(values)}`,
        willPlantsBePruned: values.willPlantsBePruned,
        whereWillPruningsGo: values.whereWillPruningsGo,
        willSawdustBeApplied: values.willSawdustBeApplied,
      });
      setFieldsInfo(farmInfo);
      setCropIndex((prevIndex) => prevIndex + 1);
      setButtonDisplayed(false);
      setFieldSelected((prevState) => prevState.map((item, idx) => (idx === index ? !item : item)));
      setSubmitted(true);
    }, 400);
  };
  const submitFarmInfo = () => {
    const farmInfo: FarmDetailsInterface = { ...farmDetails };
    updateFarmDetails(farmInfo);
  };
  const addNewCrop = (index: number) => {
    setFieldIndex(index);
    setCropIndex(farmDetails.Fields[index].Crops.length - 1);
    setInitialFieldValues(CropsInitialDetails);
    setButtonDisplayed(true);
    setFieldSelected((prevState) => prevState.map((item, idx) => (idx === index ? !item : item)));
  };

  return (
    <>
      {farmDetails.Fields.map((fields: FieldDetailInterface, index: number) => (
        <div key={`${fields.FieldName}${fields.Area}${fields.Comment}`}>
          <CropsList
            fields={fields}
            index={index}
            farmDetails={farmDetails}
            addNewCrop={addNewCrop}
            buttonDisplayed={isButtonDisplayed}
            updateFarmDetails={updateFarmDetails}
            updateNutrientDetails={updateNutrientDetails}
            handleFormState={handleFormState}
          />
          <Formik
            initialValues={initialFieldValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              addFieldData(values, index);
              setSubmitting(false);
            }}
          >
            {({ values }) => hasFieldBeenSelected[index] && (
            <Form>
              <StyledFarmInfo>
                <StyledCropsSmallGroup>
                  <CustomSelect
                    name="cropId"
                    id="cropId"
                    label="Crop"
                    options={CropIDOptions}
                    width="40%"
                  />
                  <StyledAreaContainer formCrops>
                    <CustomField
                      label="Yield"
                      id="yield"
                      name="yield"
                      type="number"
                      width="50%"
                    />
                    <p>tons/ac</p>
                  </StyledAreaContainer>
                </StyledCropsSmallGroup>
                {values.cropId === 'Blueberry' && (
                <>
                  <StyledCropsSmallGroup>
                    <CustomSelect
                      name="plantAgeYears"
                      id="plantAgeYears"
                      label="Plant age (Years)"
                      options={PlantAgeOptions}
                      width="40%"
                    />
                    <CustomSelect
                      name="numberOfPlantsPerAcre"
                      id="numberOfPlantsPerAcre"
                      label="Plants per acre"
                      options={PlantsPerAcre}
                      width="40%"
                    />
                  </StyledCropsSmallGroup>
                  <StyledCropsLargeGroup>
                    <CustomSelect
                      name="distanceBtwnPlants"
                      id="distanceBtwnPlants"
                      label="Distance between plants"
                      options={DistanceBtwnPlants}
                      width="40%"
                    />
                    <CustomSelect
                      name="distanceBtwnRows"
                      id="distanceBtwnRows"
                      label="Distance between rows"
                      options={DistanceBtwnRows}
                      width="40%"
                    />
                  </StyledCropsLargeGroup>
                </>
                )}
                <StyledCropsLargeGroup>
                  <CustomSelect
                    name="willPlantsBePruned"
                    id="willPlantsBePruned"
                    label="Will plants be pruned?"
                    options={YesOrNo}
                    width="40%"
                  />
                  <CustomSelect
                    name="whereWillPruningsGo"
                    id="whereWillPruningsGo"
                    label="Where will prunings go?"
                    options={WherePruningsGo}
                    width="40%"
                  />
                </StyledCropsLargeGroup>
                <StyledCropsLargeGroup>
                  <CustomSelect
                    name="willSawdustBeApplied"
                    id="willSawdustBeApplied"
                    label="Is sawdust or wood mulch applied within 6 months prior to the growing season?"
                    options={YesOrNo}
                    width="75%"
                  />
                </StyledCropsLargeGroup>
                <StyledButtonGroupContainer>
                  <Button
                    type="reset"
                    size="lg"
                    disabled={false}
                    actions="secondary"
                    text={ComponentText.CANCEL}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={false}
                    text={ComponentText.ADD}
                  />
                </StyledButtonGroupContainer>
              </StyledFarmInfo>
            </Form>
            )}
          </Formik>
        </div>
      ))}
      {(!isButtonDisplayed || isSubmitted) && (
        <StyledAddCancelButtonGroup>
          <CropsButtonGroup
            submitFarmInfo={submitFarmInfo}
            handleFormState={handleFormState}
            buttonText={{
              back: ComponentText.BACK,
              next: ComponentText.NEXT,
            }}
            disabled // adjust in the future sprints
          />
        </StyledAddCancelButtonGroup>
      )}
    </>
  );
};

const CropsInfoForm: InputModuleInterface = {
  InputModuleComponent: CropsInfoComponent,
  id: CROPS_INFORMATION,
  name: { long: 'Crops Information', short: 'Crops Info' },
  faIcon: faSeedling,
  status: 'inactive',
  enable: false,
};

export default CropsInfoForm;
