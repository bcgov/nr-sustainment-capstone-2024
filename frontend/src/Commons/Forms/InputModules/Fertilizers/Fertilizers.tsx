import React, { useState } from 'react';
import { faCow } from '@fortawesome/free-solid-svg-icons';
import InputModuleInterface from '@Interface/InputModuleinterface';
import { FERTILIZERS_INFORMATION } from '@Constants/ModuleIDs';
import InputModuleProps from '@Interface/InputModuleProps';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { StyledFarmInfo } from '@Commons/FormStyles.styles';
import {
  StyledAddCancelButtonContainer,
  StyledButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from '@Commons/Button/FieldButtonGroup.styles';
import {
  DryFertilizerOptions,
  FertilizerTypeOptions,
  LiquidFertilizerOptions,
} from '@Constants/FertilizersOptions';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import Button from '@Commons/Button/Button';
import ComponentText from '@Constants/ComponentText';
import CustomField from '@Commons/Input/Field/CustomField';
import FertilizerInterface from '@Interface/FertilizerInterface';
import handleChange from '@Utils/handleChange';
import FertilizersButtonComponent from './FertilizersButtonComponent';
import StyledCustomNumberField from './Fertilizers.styles';
import FertilizersListComponent from './FertilizersListComponent';

const FertilizersInfo: React.FC<InputModuleProps> = ({
  fertilizersDetails,
  handleFormState,
  updateFertDetails,
}) => {
  const initialFieldValues = initialFarmDetails.Fields[0].Nutrients[0];
  const [isAddButtonClicked, setAddButtonClicked] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    fertilizerTypeId: Yup.string().required('Required'),
    fertilizerId: Yup.string().when('fertilizerTypeId', (fertilizerTypeId) =>
      fertilizerTypeId.toString() === 'Dry Fertilizer' ||
      fertilizerTypeId.toString() === 'Liquid Fertilizer'
        ? Yup.string().required('Required')
        : Yup.string().notRequired(),
    ),
    customN: Yup.number().when('fertilizerTypeId', (fertilizerTypeId) =>
      fertilizerTypeId.toString() === 'Dry Fertilizer (Custom)' ||
      fertilizerTypeId.toString() === 'Liquid Fertilizer (Custom)'
        ? Yup.number().min(0).max(25).required()
        : Yup.number().notRequired(),
    ),
    customP2o5: Yup.number().when('fertilizerTypeId', (fertilizerTypeId) =>
      fertilizerTypeId.toString() === 'Dry Fertilizer (Custom)' ||
      fertilizerTypeId.toString() === 'Liquid Fertilizer (Custom)'
        ? Yup.number().min(0).max(25).required()
        : Yup.number().notRequired(),
    ),
    customK2o: Yup.number().when('fertilizerTypeId', (fertilizerTypeId) =>
      fertilizerTypeId.toString() === 'Dry Fertilizer (Custom)' ||
      fertilizerTypeId.toString() === 'Liquid Fertilizer (Custom)'
        ? Yup.number().min(0).max(25).required()
        : Yup.number().notRequired(),
    ),
  });

  const addFert = (values: FertilizerInterface): void => {
    // Will be changed on enhancements.
    let tempFertilizerId = '';
    let fertNValue = 0;
    let fertP2o5Value = 0;
    let fertK20Value = 0;

    if (values.fertilizerTypeId.includes('Dry Fertilizer (Custom)')) {
      tempFertilizerId = `Dry Fertilizer Custom (${values.customN}-${values.customP2o5}-${values.customK2o})`;
    } else if (values.fertilizerTypeId.includes('Liquid Fertilizer (Custom)')) {
      tempFertilizerId = `Liquid Fertilizer Custom (${values.customN}-${values.customP2o5}-${values.customK2o})`;
    }

    switch (values.fertilizerId) {
      case 'Urea (46-0-0)':
        fertNValue = 46;
        break;
      case '15-15-17':
        fertNValue = 15;
        fertP2o5Value = 15;
        fertK20Value = 17;
        break;
      case 'Ammonium polyphosphate (10-34-0)':
        fertNValue = 10;
        fertP2o5Value = 34;
        break;
      case 'Liquid urea (23-0-0)':
        fertNValue = 23;
        break;
      default:
        break;
    }

    const newFertilizer: FertilizerInterface = {
      id: fertilizersDetails.length,
      fertilizerTypeId: values.fertilizerTypeId,
      fertilizerId: values.fertilizerTypeId.includes('(Custom)')
        ? tempFertilizerId
        : values.fertilizerId,
      applRate: values.applRate,
      applDate: '',
      applMethodId: '',
      customN: values.customN,
      customP2o5: values.customP2o5,
      customK2o: values.customK2o,
      fertN: fertNValue,
      fertP2o5: fertP2o5Value,
      fertK2o: fertK20Value,
      liquidDensity: 0,
      liquidDensityUnitId: '',
    };

    if (updateFertDetails) updateFertDetails([...fertilizersDetails, newFertilizer]);
    setAddButtonClicked(false);
  };

  const addNewFertilizer = () => {
    setAddButtonClicked(true);
  };

  return (
    <>
      {fertilizersDetails.length > 0 && (
        <FertilizersListComponent fertilizerDetails={fertilizersDetails} />
      )}

      {!isAddButtonClicked && (
        <FertilizersButtonComponent
          addNewFertilizer={addNewFertilizer}
          handleFormState={handleFormState}
        />
      )}

      {isAddButtonClicked && (
        <Formik
          initialValues={initialFieldValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            addFert(values);
          }}
        >
          {({ values }) => (
            <Form>
              <StyledFarmInfo formNutrients>
                <div id="inputContainer">
                  <CustomSelect
                    name="fertilizerTypeId"
                    id="fertilizerTypeId"
                    label="Fertilizer Type"
                    options={FertilizerTypeOptions}
                    width="40%"
                  />
                  {values.fertilizerTypeId.includes('Dry Fertilizer (Custom)') ||
                  values.fertilizerTypeId.includes('Liquid Fertilizer (Custom)') ? (
                    <StyledCustomNumberField>
                      <CustomField
                        label="N (%)"
                        name="customN"
                        id="customN"
                        type="number"
                        width="30%"
                      />
                      <CustomField
                        label="P2O5 (%)"
                        name="customP2o5"
                        id="customP2o5"
                        type="number"
                        width="30%"
                      />
                      <CustomField
                        label="K2O (%)"
                        name="customK2o"
                        id="customK2o"
                        type="number"
                        width="30%"
                      />
                    </StyledCustomNumberField>
                  ) : (
                    <CustomSelect
                      name="fertilizerId"
                      id="fertilizerId"
                      label="Fertilizer Name"
                      options={
                        values.fertilizerTypeId.includes('Dry Fertilizer')
                          ? DryFertilizerOptions
                          : values.fertilizerTypeId.includes('Liquid Fertilizer')
                            ? LiquidFertilizerOptions
                            : []
                      }
                      width="40%"
                    />
                  )}
                </div>
                <StyledAddCancelButtonContainer>
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
                </StyledAddCancelButtonContainer>
              </StyledFarmInfo>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

const FertilizersInfoForm: InputModuleInterface = {
  InputModuleComponent: FertilizersInfo,
  id: FERTILIZERS_INFORMATION,
  name: { long: 'Fertilizer', short: 'Fertilizer' },
  faIcon: faCow,
  status: 'inactive',
  enable: false,
};

export default FertilizersInfoForm;
