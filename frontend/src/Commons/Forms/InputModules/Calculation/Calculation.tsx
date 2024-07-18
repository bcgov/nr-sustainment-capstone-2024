import React, { useState } from 'react';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import InputModuleInterface from '@Interface/InputModuleinterface';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import InputModuleProps from '@Interface/InputModuleProps';
import { CALCULATION_INFORMATION } from '@Constants/ModuleIDs';
import { NutrientsInterface, TempNutrientsInterface } from '@Interface/NutrientsInterface';

import StatusValidate from '@Utils/StatusValidate';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import OptionInterface from '@Interface/OptionInterface';
import Button from '@Commons/Button/Button';
import ComponentText from '@Constants/ComponentText';
import {
  StyledAddCancelButtonContainer,
  StyledButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from '@Commons/Button/FieldButtonGroup.styles';
import handleChange from '@Utils/handleChange';
import { DryApplicationUnits, LiquidApplicationUnits } from '@Constants/FertilizersOptions';
import CustomField from '@Commons/Input/Field/CustomField';
import {
  StyledFieldContainer,
  StyledFieldSelect,
  StyledGroupFormView,
  StyledLeftView,
  StyledSmallFormGroup,
} from './Calculation.styles';

const CalculationComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  fertilizersDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  const [fieldIndex, setFieldIndex] = useState(farmDetails.Fields.length);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const initialValues: TempNutrientsInterface = initialFarmDetails.Fields[0].Nutrients[0];

  const fieldsOption: OptionInterface[] = farmDetails.Fields.map((field) => ({
    value: field.FieldName,
    label: field.FieldName,
  }));

  const fertilizerOption: OptionInterface[] = fertilizersDetails.map((fertilizer) => ({
    value: fertilizer.fertilizerId,
    label: fertilizer.fertilizerId,
  }));

  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().required('Required'),
    fertilizerId: Yup.string().required('Required'),
    applRate: Yup.number().positive().required('Required'),
    // applUnitId: Yup.string().required('Required'),
    // remaining are optional for now. Build it after running
  });

  const submitCalculationData = (values: TempNutrientsInterface): void => {
    const fertilizer: NutrientsInterface[] = { ...fertilizersDetails };
    setFieldIndex(fieldsOption.findIndex((option) => option.value === values.FieldName));
    console.log(fertilizer[selectedIndex].fertilizerTypeId);
    const updateFertilizer: NutrientsInterface = {
      id: fertilizer[selectedIndex].id,
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
      farmDetails.Fields[fieldIndex].Nutrients.push(updateFertilizer);
      console.log(farmDetails);
      updateFarmDetails(farmDetails);
    });
  };
  const handleFertilizerChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: Function,
  ) => {
    setFieldValue(event.target.name, event.target.value);
    setSelectedIndex(fertilizerOption.findIndex((option) => option.value === event.target.value));
  };
  return (
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
                width="40%"
                onChange={(e) => handleChange(e, setFieldValue)}
              />
            </StyledFieldSelect>
            <StyledGroupFormView>
              <StyledLeftView>
                <CustomSelect
                  label="Fertilizer"
                  id="fertilizerId"
                  name="fertilizerId"
                  options={fertilizerOption}
                  width="100%"
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
                    options={
                      fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Dry Fertilizer')
                        ? DryApplicationUnits
                        : fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes(
                              'Liquid Fertilizer',
                            )
                          ? LiquidApplicationUnits
                          : []
                    }
                    width="50%"
                    onChange={(e) => handleChange(e, setFieldValue)}
                  />
                </StyledSmallFormGroup>
              </StyledLeftView>
            </StyledGroupFormView>
            {/* <StyledAddCancelButtonContainer>
              <SecondaryButton>
                <StyledButtonContainer>
                  <Button
                    type="reset"
                    size="lg"
                    disabled={false}
                    actions="secondary"
                    text={ComponentText.CANCEL}
                  />
                </StyledButtonContainer>
              </SecondaryButton>
              <PrimaryButton>
                <StyledButtonContainer>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={false}
                    text={ComponentText.SAVE_FERTILIZER}
                  />
                </StyledButtonContainer>
              </PrimaryButton>
            </StyledAddCancelButtonContainer> */}
          </StyledFieldContainer>
        </Form>
      )}
    </Formik>
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
