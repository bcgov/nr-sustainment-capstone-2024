/**
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import React from 'react';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import ComponentText from '@Constants/ComponentText';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomField from '@Commons/Input/CustomField';
import { StyledFarmInfo, StyledSelectContainer } from './FarmInformation.style';

interface SubmissionValues {
  FarmName: string;
  Year: string;
  FarmRegion: string;
}

const FarmInfoComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const initialValues = {
    FarmName: farmDetails.FarmName,
    Year: farmDetails.Year,
    FarmRegion: farmDetails.FarmRegion,
  };

  const validationSchema = Yup.object().shape({
    FarmName: Yup.string().max(24).required('Required'),
    Year: Yup.number().min(1900).max(2099).required('Required'),
    FarmRegion: Yup.string().required('Required'),
  });

  const onSubmit = (
    values: SubmissionValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): void => {
    // Suggested timeout by Formik docs
    setTimeout(() => {
      // There is probably a better way of doing this with a for loop
      // Build a FarmDetails object and use it to update the main data passed from the Main Page
      const farmInformation: FarmDetailsInterface = { ...farmDetails };
      farmInformation.FarmName = values.FarmName;
      farmInformation.Year = values.Year;
      farmInformation.FarmRegion = values.FarmRegion;
      // Update the Main Data Object
      updateFarmDetails(farmInformation);
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <StyledFarmInfo>
          <div id="inputContainer">
            <CustomField
              label="Year"
              id="Year"
              name="Year"
              type="number"
              width="20%"
            />

            <CustomField
              label="Farm Name"
              id="FarmName"
              name="FarmName"
              type="text"
            />
          </div>

          <label htmlFor="FarmRegion">
            <p>Region</p>
          </label>
          <StyledSelectContainer>
            <Field
              name="FarmRegion"
              as="select"
              id="FarmRegion"
            >
              <option value="Vancouver Island">Vancouver Island</option>
            </Field>
            <ErrorMessage
              name="FarmRegion"
              component="span"
            />

            <button type="submit">{ComponentText.NEXT}</button>
          </StyledSelectContainer>
        </StyledFarmInfo>
      </Form>
    </Formik>
  );
};

const FarmInfoForm: InputModuleInterface = {
  InputModuleComponent: FarmInfoComponent,
  id: 'FarmInformation',
  name: { long: 'Farm Information', short: 'Farm Info' },
  faIcon: faTractor,
  enable: true,
};

export default FarmInfoForm;
