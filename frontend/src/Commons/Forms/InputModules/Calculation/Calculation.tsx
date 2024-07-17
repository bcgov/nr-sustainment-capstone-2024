import React, { useState } from 'react';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import InputModuleInterface from '@Interface/InputModuleinterface';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import InputModuleProps from '@Interface/InputModuleProps';
import { CALCULATION_INFORMATION } from '@Constants/ModuleIDs';
import { NutrientsInterface } from '@Interface/NutrientsInterface';
import { StyledFarmInfo } from '@Commons/FormStyles.styles';
import StatusValidate from '@Utils/StatusValidate';

const CalculationComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  fertilizersDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  const [fieldIndex, setFieldIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const initialValues: NutrientsInterface = initialFarmDetails.Fields[0].Nutrients[0];

  const validationSchema = Yup.object().shape({
    field: Yup.string().required('Required'),
    fertilizer: Yup.string().required('Required'),
    applRate: Yup.number().positive().required('Required'),
    applUnitId: Yup.string().required('Required'),
    // remaining are optional for now. Build it after running
  });

  const submitCalculationData = (values: NutrientsInterface): void => {
    const fertilizer: NutrientsInterface[] = { ...fertilizersDetails };
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
      setFieldIndex((props) => props + 1); // for now
      setSelectedIndex((props) => props); // for now
      updateFarmDetails(farmDetails);
    });
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
      <Form>
        <StyledFarmInfo>
          <h2>Hello</h2>
        </StyledFarmInfo>
      </Form>
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
