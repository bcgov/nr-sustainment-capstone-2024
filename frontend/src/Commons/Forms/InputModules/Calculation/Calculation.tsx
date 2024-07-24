import React, { useState } from 'react';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import InputModuleInterface from '@Interface/InputModuleinterface';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import InputModuleProps from '@Interface/InputModuleProps';
import { CALCULATION_INFORMATION } from '@Constants/ModuleIDs';
import FertilizerInterface from '@Interface/FertilizerInterface';

import StatusValidate from '@Utils/StatusValidate';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import OptionInterface from '@Interface/OptionInterface';
import Button from '@Commons/Button/Button';
import ComponentText from '@Constants/ComponentText';
import { StyledButtonContainer } from '@Commons/Button/FieldButtonGroup.styles';
import handleChange from '@Utils/handleChange';
import {
  DryApplicationUnits,
  LiquidApplicationUnits,
  ApplicationMethod,
  DensityUnits,
} from '@Constants/FertilizersOptions';
import CustomField from '@Commons/Input/Field/CustomField';
import {
  StyledFieldContainer,
  StyledFieldSelect,
  StyledGroupFormView,
  StyledLeftView,
  StyledRightView,
  StyledSmallFormGroup,
  RightListGroup,
  RightListItem,
} from './Calculation.styles';
import { StyledDivider } from '../ListComponent.styles';
import CalculationList from './CalculationList';
import CalculationButtonGroup from './CalculationButtonGroup';

const CalculationComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  fertilizersDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  const [fertilizerIndex, setFertilizerIndex] = useState<number[]>(
    Array(farmDetails.Fields.length).fill(0),
  );
  const [selectedFieldIndex, setFieldIndex] = useState(farmDetails.Fields.length);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hasFertilizerAdded, setFertilizerAdded] = useState<boolean>(false);

  const initialValues: FertilizerInterface = initialFarmDetails.Fields[0].Nutrients[0];
  // For calculation, it will be done next ticket. Change const into let
  const NCalc = 0;
  const P2O5Calc = 0;
  const K2OCalc = 0;
  const fieldsOption: OptionInterface[] = farmDetails.Fields.map((field) => ({
    value: field.FieldName,
    label: field.FieldName,
  }));

  const fertilizerOption: OptionInterface[] = fertilizersDetails.map((fertilizer) => ({
    value: fertilizer.fertilizerId,
    label: fertilizer.fertilizerId,
  }));
  const isLiquid = fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Liquid');
  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().required('Required'),
    fertilizerId: Yup.string().required('Required'),
    applRate: Yup.number().positive().required('Required'),
    applUnitId: Yup.string().required('Required'),
    liquidDensity: Yup.number().when([], () =>
      isLiquid
        ? Yup.number().required('Required').positive('Liquid density must be a positive number')
        : Yup.number().notRequired(),
    ),
    liquidDensityUnitId: Yup.string().when([], () =>
      isLiquid ? Yup.string().required('Required') : Yup.string().notRequired(),
    ),
  });
  /**
   * @description   submits the calculation data and uploads it into the Main JSON data file
   * @param values  uses the interface @TempNutrientsInterface it holds the data that
   *              has been entered in the input fields.
   */
  const submitCalculationData = (values: FertilizerInterface): void => {
    const fertilizer: FertilizerInterface[] = { ...fertilizersDetails };
    const updateFertilizer: FertilizerInterface = {
      id: fertilizerIndex[selectedFieldIndex],
      fertilizerTypeId: fertilizer[selectedIndex].fertilizerTypeId,
      fertilizerId: fertilizer[selectedIndex].fertilizerId,
      applUnitId: values.applUnitId,
      applRate: values.applRate,
      applDate: values.applDate || '',
      applMethodId: values.applMethodId || '',
      customN: fertilizer[selectedIndex].customN,
      customP2o5: fertilizer[selectedIndex].customP2o5,
      customK2o: fertilizer[selectedIndex].customK2o,
      fertN: fertilizer[selectedIndex].fertN,
      fertP2o5: fertilizer[selectedIndex].customP2o5,
      fertK2o: fertilizer[selectedIndex].fertK2o,
      liquidDensity: values.liquidDensity,
      liquidDensityUnitId: values.liquidDensityUnitId,
    };
    setTimeout(() => {
      farmDetails.Fields[selectedFieldIndex].Nutrients.push(updateFertilizer);
      setFertilizerIndex((prevIndexes) => {
        const fertilizerIndexArry = [...prevIndexes];
        fertilizerIndexArry[selectedFieldIndex] =
          (fertilizerIndexArry[selectedFieldIndex] || 0) + 1;
        return fertilizerIndexArry;
      });
      setFertilizerAdded(true);
      updateFarmDetails(farmDetails);
    });
  };
  /**
   * @desc                  A helper method that uses the state hook @setFieldIndex to find
   *                        the index of the selected field to access the correct field when accessing it
   * @param event           Triggered when the value of a select element changes
   * @param setFieldValue   Sets the value of the input field based on the event.target
   * @author                @Kcaparas
   */
  const handleFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: Function,
  ) => {
    setFieldValue(event.target.name, event.target.value);
    setFieldIndex(fieldsOption.findIndex((option) => option.value === event.target.value));
  };
  /**
   * @desc                  A helper method that uses the state hook @setSelectedIndex to find
   *                        the index of the selected fertilizer to access the correct fertilizer when accessing it
   * @param event           Triggered when the value of a select element changes
   * @param setFieldValue   Sets the value of the input field based on the event.target
   * @author                @Kcaparas
   */
  const handleFertilizerChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: Function,
  ) => {
    setFieldValue(event.target.name, event.target.value);
    setSelectedIndex(fertilizerOption.findIndex((option) => option.value === event.target.value));
  };

  const displayFertilizerOption = (): OptionInterface[] => {
    if (fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Dry Fertilizer')) {
      return DryApplicationUnits;
    }
    if (fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Liquid Fertilizer')) {
      return LiquidApplicationUnits;
    }
    return [];
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitCalculationData}
        validate={(values) => {
          StatusValidate(validationSchema, values, handleFormState, CALCULATION_INFORMATION);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <StyledFieldContainer>
              <StyledFieldSelect>
                <CustomSelect
                  label="Field"
                  id="FieldName"
                  name="FieldName"
                  options={fieldsOption}
                  width="100%"
                  formCalc
                  onChange={(e) => handleFieldChange(e, setFieldValue)}
                />
              </StyledFieldSelect>
              <StyledDivider />
              <StyledGroupFormView>
                <StyledLeftView>
                  <CustomSelect
                    label="Fertilizer"
                    id="fertilizerId"
                    name="fertilizerId"
                    options={fertilizerOption}
                    width="100%"
                    formCalc
                    onChange={(e) => handleFertilizerChange(e, setFieldValue)}
                  />
                  <StyledSmallFormGroup>
                    <CustomField
                      label="Application Rate"
                      name="applRate"
                      id="applRate"
                      type="number"
                      width="50%"
                    />
                    <CustomSelect
                      label="Units"
                      name="applUnitId"
                      id="applUnitId"
                      options={displayFertilizerOption()}
                      width="50%"
                      formCalc
                      onChange={(e) => handleChange(e, setFieldValue)}
                    />
                  </StyledSmallFormGroup>
                  {fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Liquid') && (
                    <StyledSmallFormGroup>
                      <CustomField
                        label="Density"
                        name="liquidDensity"
                        id="liquidDensity"
                        type="number"
                        width="50%"
                      />
                      <CustomSelect
                        label="Density Units"
                        id="liquidDensityUnitId"
                        name="liquidDensityUnitId"
                        options={DensityUnits}
                        width="50%"
                        formCalc
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                    </StyledSmallFormGroup>
                  )}
                  <StyledSmallFormGroup>
                    <CustomSelect
                      label="Method (optional)"
                      id="applMethodId"
                      name="applMethodId"
                      options={ApplicationMethod}
                      width="50%"
                      formCalc
                      onChange={(e) => handleChange(e, setFieldValue)}
                    />
                    <CustomField
                      label="Date (optional)"
                      name="applDate"
                      id="applDate"
                      type="text"
                      width="50%"
                    />
                  </StyledSmallFormGroup>
                </StyledLeftView>
                <StyledRightView>
                  <h3>Available Nutrients (lb/ac)</h3>
                  <RightListGroup>
                    <RightListItem>
                      <h4>N</h4>
                      <p>{NCalc}</p>
                    </RightListItem>
                    <RightListItem>
                      <h4>P2O5</h4>
                      <p>{P2O5Calc}</p>
                    </RightListItem>
                    <RightListItem>
                      <h4>k2O</h4>
                      <p>{K2OCalc}</p>
                    </RightListItem>
                  </RightListGroup>
                  <StyledButtonContainer formCalc>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={false}
                      text={ComponentText.ADD_FERTILIZERS_FIELD}
                    />
                  </StyledButtonContainer>
                </StyledRightView>
              </StyledGroupFormView>
              <StyledDivider />
              <CalculationList
                farmDetails={farmDetails}
                selectedFieldIndex={selectedFieldIndex}
                hasFertilizerAdded={hasFertilizerAdded}
              />
            </StyledFieldContainer>
          </Form>
        )}
      </Formik>
      <CalculationButtonGroup handleFormState={handleFormState} />
    </>
  );
};

const Calculation: InputModuleInterface = {
  InputModuleComponent: CalculationComponent,
  id: CALCULATION_INFORMATION,
  name: { long: 'Calculation', short: 'Calculation' },
  faIcon: faCalculator,
  status: 'inactive',
  enable: false,
};

export default Calculation;
