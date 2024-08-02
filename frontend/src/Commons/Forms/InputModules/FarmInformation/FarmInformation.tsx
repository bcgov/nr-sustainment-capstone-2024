/**
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import * as Yup from 'yup';
import { FC } from 'react';
import { Formik, Form } from 'formik';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from '@Interface/InputModuleProps';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import InputModuleInterface from '@Interface/InputModuleinterface';
import OptionInterface from '@Interface/OptionInterface';
import ComponentText from '@Constants/ComponentText';
import { FARM_INFORMATION } from '@Constants/ModuleIDs';
import CustomField from '@Commons/Input/Field/CustomField';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import Button from '@Commons/Button/Button';
import StatusValidate from '@Utils/StatusValidate';
import handleChange from '@Utils/handleChange';
import {
  StyledFarmInfo,
  StyledSelectContainer,
  StyledButtonController,
} from './FarmInformation.style';

interface SubmissionValues {
  FarmName: string;
  Year: string;
  FarmRegion: string;
}

const options: OptionInterface[] = [{ value: 'Vancouver Island', label: 'Vancouver Island' }];

const FarmInfoComponent: FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
}) => {
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
      farmInformation.Year = values.Year.toString();
      farmInformation.FarmRegion = values.FarmRegion;
      farmInformation.HasBerries = true; // will always be true for now
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
      validate={(values) => {
        StatusValidate(validationSchema, values, handleFormState, FARM_INFORMATION);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <StyledFarmInfo>
            <div id="inputContainer">
              <CustomField
                label="Year"
                id="Year"
                name="Year"
                type="number"
                desktopWidth="137px"
                mobileWidth="71px"
              />

              <CustomField
                label="Farm Name"
                id="FarmName"
                name="FarmName"
                type="text"
                desktopWidth="299px"
                mobileWidth="134px"
              />
            </div>

            <StyledSelectContainer>
              <CustomSelect
                name="FarmRegion"
                id="FarmRegion"
                label="Region"
                options={options}
                desktopWidth="468px"
                mobileWidth="259px"
                onChange={(e) => handleChange(e, setFieldValue)}
              />
              <StyledButtonController>
                <Button
                  type="submit"
                  size="lg"
                  disabled={false}
                  text={ComponentText.NEXT}
                />
              </StyledButtonController>
            </StyledSelectContainer>
          </StyledFarmInfo>
        </Form>
      )}
    </Formik>
  );
};

const FarmInfoForm: InputModuleInterface = {
  InputModuleComponent: FarmInfoComponent,
  id: FARM_INFORMATION,
  name: { long: 'Farm Information', short: 'Farm Info' },
  faIcon: faTractor,
  enable: true,
  status: 'active',
};

export default FarmInfoForm;
