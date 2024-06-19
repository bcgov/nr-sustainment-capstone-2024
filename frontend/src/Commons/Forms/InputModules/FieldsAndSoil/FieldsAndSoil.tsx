/**
 * @summary Field and Soil Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import InputModuleProps from 'src/Interface/InputModuleProps';
import React, { useState } from 'react';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ComponentText from '@Constants/ComponentText';
import Button from '@Commons/Button/Button';
import CustomField from '@Commons/Input/Field/CustomField';
import CustomTextArea from '@Commons/Input/TextArea/CustomTextArea';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
  StyledListContainer,
  StyledListItem,
} from './FieldsAndSoil.style';

interface SubmissionValues {
  FieldName: string;
  Area: number;
  Comments?: string;
}

const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const [fieldsInfo, setFieldsInfo] = useState(farmDetails);

  const initialValues = {
    FieldName: farmDetails.FieldName,
    Area: farmDetails.Area,
    Comments: farmDetails.Comments,
  };

  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number().min(1).max(100).required('Required'),
    Comments: Yup.string().max(200),
  });

  const onSubmit = (
    values: SubmissionValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): void => {
    setTimeout(() => {
      const farmInformation: FarmDetailsInterface = { ...farmDetails };
      farmInformation.FieldName = values.FieldName;
      farmInformation.Area = values.Area;
      farmInformation.Comments = values.Comments;
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
      {({ values }) => (
        <Form>
          <StyledFarmInfo>
            <div id="inputContainer">
              <CustomField
                label="Field name"
                id="FieldName"
                name="FieldName"
                type="text"
              />
              <CustomField
                label="Area"
                id="Area"
                name="Area"
                type="number"
                width="20%"
              />
            </div>
            <StyledTextAreaContainer>
              <CustomTextArea
                name="Comments"
                id="Comments"
                label="Comments (optional)"
                placeholder="e.g., poor drainage in southwest corner (no need to specify crop here)"
                width="50%"
              />
              <StyledButtonGroupContainer>
                <Button
                  type="reset"
                  size="sm"
                  disabled={false}
                  text={ComponentText.CANCEL}
                />
                <Button
                  type="button"
                  size="sm"
                  disabled={false}
                  text={ComponentText.ADD}
                  handleClick={() => {
                    const farmInfo: FarmDetailsInterface = { ...fieldsInfo };
                    farmInfo.FieldName = values.FieldName;
                    farmInfo.Area = values.Area;
                    farmInfo.Comments = values.Comments;
                    setFieldsInfo(farmInfo);
                  }}
                />
              </StyledButtonGroupContainer>
            </StyledTextAreaContainer>
            <StyledListContainer>
              <StyledListItem>
                <h4>Field Name</h4>
                <p>{fieldsInfo.FieldName}</p>
              </StyledListItem>
              <StyledListItem>
                <h4>Area</h4>
                <p>{fieldsInfo.Area}</p>
              </StyledListItem>
              <StyledListItem>
                <h4>Comments</h4>
                <p>{fieldsInfo.Comments}</p>
              </StyledListItem>
            </StyledListContainer>
          </StyledFarmInfo>
        </Form>
      )}
    </Formik>
  );
};

const FieldsAndSoil: InputModuleInterface = {
  InputModuleComponent: FieldsAndSoilComponent,
  id: 'FieldsAndSoil',
  name: { long: 'Fields and Soil', short: 'Fields' },
  faIcon: faWheatAwn,
  enable: false,
};

export default FieldsAndSoil;
