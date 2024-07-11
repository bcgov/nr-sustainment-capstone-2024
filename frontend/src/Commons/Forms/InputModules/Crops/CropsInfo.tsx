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
import CropsButtonGroup from './CropsButtonGroup';
import {
  StyledCropsSmallGroup,
  StyledCropsLargeGroup,
  StyledAreaContainer,
  StyledAddCancelButtonGroup,
} from './CropsInfo.styles';
import { StyledFarmInfo, StyledButtonGroupContainer } from '../../../FormStyles.styles';

const CropsInfoComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  const [, setFieldsInfo] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [cropIndex, setCropIndex] = useState(0);
  const [initialFieldValues, setInitialFieldValues] = useState(CropsInitialDetails);
  // Only triggered once, it would show list and persists.
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  // Would trigger when new field button is clicked.
  const [isButtonDisplayed, setButtonDisplayed] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    cropId: Yup.string().required('Required'),
    yield: Yup.number().positive().max(100).required('Required'),
    plantAgeYears: Yup.string().when('cropId', (cropId) =>
      cropId.toString() === 'Blueberry'
        ? Yup.string().required('Required')
        : Yup.string().notRequired(),
    ),
    numberOfPlantsPerAcre: Yup.number().when('cropId', (cropId) =>
      cropId.toString() === 'Blueberry'
        ? Yup.number().required('Required')
        : Yup.number().notRequired(),
    ),
    distanceBtwnPlants: Yup.string().when('cropId', (cropId) =>
      cropId.toString() === 'Blueberry'
        ? Yup.string().required('Required')
        : Yup.string().notRequired(),
    ),
    distanceBtwnRows: Yup.string().when('cropId', (cropId) =>
      cropId.toString() === 'Blueberry'
        ? Yup.string().required('Required')
        : Yup.string().notRequired(),
    ),
    willPlantsBePruned: Yup.boolean().required('Required'),
    whereWillPruningsGo: Yup.string().required('Required'),
    willSawdustBeApplied: Yup.boolean().required('Required'),
  });

  const distanceBtwnPlantsRowsDataAppend = (values: SubmissionCropsInterface) => {
    let resultString = '';

    if (values.distanceBtwnPlants === '0.6' && values.distanceBtwnRows === '2.7') {
      resultString += '(2ft x 9ft)';
    }
    if (values.distanceBtwnPlants === '0.6' && values.distanceBtwnRows === '3.0') {
      resultString += '(2ft x 10ft)';
    }
    if (values.distanceBtwnPlants === '0.75' && values.distanceBtwnRows === '2.7') {
      resultString += '(2.5ft x 9ft)';
    }
    if (values.distanceBtwnPlants === '0.75' && values.distanceBtwnRows === '3.0') {
      resultString += '(2.5ft x 10ft)';
    }
    if (values.distanceBtwnPlants === '0.9' && values.distanceBtwnRows === '2.7') {
      resultString += '(3ft x 9ft)';
    }
    if (values.distanceBtwnPlants === '0.9' && values.distanceBtwnRows === '3.0') {
      resultString += '(3ft x 10ft)';
    }

    return resultString;
  };
  const addFieldData = (values: SubmissionCropsInterface): void => {
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
      console.log(farmInfo);
      setFieldsInfo(farmInfo);
      setFieldIndex((prevIndex) => prevIndex);
      setCropIndex((prevIndex) => prevIndex + 1);
      setButtonDisplayed(false);
      setInitialFieldValues(CropsInitialDetails);
      setSubmitted(true);
    }, 400);
  };
  const submitFarmInfo = () => {
    const farmInfo: FarmDetailsInterface = { ...farmDetails };
    updateFarmDetails(farmInfo);
  };

  return (
    <>
      {farmDetails.Fields.map((fields: FieldDetailInterface) => (
        <div key={`${fields.FieldName}${fields.Area}${fields.Comment}`}>
          <h3>Field Name</h3>
          <p>{fields.FieldName}</p>
          <Formik
            initialValues={initialFieldValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              addFieldData(values);
              setSubmitting(false);
            }}
          >
            {({ values }) => (
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
                    <StyledAreaContainer>
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
            disabled // Adjust according to your logic
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
