/**
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
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
import { SubmissionCropsInterface } from 'src/Interface/CropsDetailsInterface';
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
import CropsButtonGroup from './CropsButtonComponent';
import CropsListComponent from './CropsList';
import { StyledFarmInfo, StyledButtonGroupContainer } from '../../../FormStyles.styles';
import {
  StyledCropsSmallGroup,
  StyledCropsLargeGroup,
  StyledAreaContainer,
  StyledAddCancelButtonGroup,
} from './Crops.style';

const CropsInfoComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  const [, setFieldsInfo] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [initialFieldValues, setInitialFieldValues] = useState(CropsInitialDetails);
  // Only triggered once, it would show list and persists.
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  // Would trigger when new field button is clicked.
  const [isFieldAdded, setFieldAdd] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    cropId: Yup.string().required('Required'),
    yield: Yup.number().positive().max(100).required('Required'),
    plantAgeYears: Yup.number().when('cropId', (cropId) =>
      cropId.toString() === 'Blueberry'
        ? Yup.number().required('Required')
        : Yup.number().notRequired(),
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
  const addFieldData = (values: SubmissionCropsInterface): void => {
    setTimeout(() => {
      const farmInfo: FarmDetailsInterface = { ...farmDetails };
      farmInfo.Fields[fieldIndex].Crops.push({
        id: fieldIndex,
        cropId: values.cropId,
        yield: values.yield,
        plantAgeYears: values.plantAgeYears,
        numberOfPlantsPerAcre: values.numberOfPlantsPerAcre,
        distanceBtwnPlantsRows: values.distanceBtwnPlants + values.distanceBtwnRows,
        willPlantsBePruned: values.willPlantsBePruned,
        whereWillPruningsGo: values.whereWillPruningsGo,
        willSawdustBeApplied: values.willSawdustBeApplied,
      });
      setFieldsInfo(farmInfo);
      setFieldIndex((prevIndex) => prevIndex + 1);
      setSubmitted(true);
      setFieldAdd(false);
    }, 400);
  };
  const submitFarmInfo = () => {
    const farmInfo: FarmDetailsInterface = { ...farmDetails };
    updateFarmDetails(farmInfo);
  };
  const addNewField = () => {
    setInitialFieldValues(initialFieldValues);
    setFieldAdd(true);
  };
  return (
    <>
      <CropsListComponent
        farmDetails={farmDetails}
        addNewField={addNewField}
        updateFarmDetails={updateFarmDetails}
        handleFormState={handleFormState}
      />
      <Formik
        initialValues={initialFieldValues}
        validationSchema={validationSchema}
        onSubmit={addFieldData}
      >
        {({ values }) =>
          isFieldAdded && (
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
                      width="40%"
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
          )
        }
      </Formik>
      {(!isFieldAdded || isSubmitted) && (
        <StyledAddCancelButtonGroup>
          <CropsButtonGroup
            submitFarmInfo={submitFarmInfo}
            handleFormState={handleFormState}
            buttonText={{
              back: ComponentText.BACK,
              next: ComponentText.NEXT,
            }}
            disabled // to be changed so I don't forget
          />
        </StyledAddCancelButtonGroup>
      )}
    </>
  );
};

const CropsInfoForm: InputModuleInterface = {
  InputModuleComponent: CropsInfoComponent,
  id: 'CropsInformation',
  name: { long: 'Crops Information', short: 'Crops Info' },
  faIcon: faSeedling,
  enable: false,
};

export default CropsInfoForm;
