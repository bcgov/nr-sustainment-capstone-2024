/**
 * @summary     Field and Soil Input Module
 * @description Fields and Soil Input Module that asks user input on Field Name, Area,
 *              Optional Comments. This will be implemented further in the next tickets.
 * @author      @Kcaparas
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
import { faWheatAwn, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
  StyledListContainer,
  StyledListItem,
  StyledFontAwesomeContainer,
  StyledFieldInfoList,
  StyledCommentContainerDesktop,
  StyledCommentContainerMobile,
} from './FieldsAndSoil.style';

interface SubmissionValues {
  FieldName: string;
  Area: number;
  Comments?: string | null;
}

const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const [fieldsInfo, setFieldsInfo] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);

  const initialValues = {
    FieldName: farmDetails.Fields[fieldIndex].FieldName,
    Area: farmDetails.Fields[fieldIndex].Area,
    Comments: farmDetails.Fields[fieldIndex].Comments,
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
      farmInformation.Fields[fieldIndex].FieldName = values.FieldName;
      farmInformation.Fields[fieldIndex].Area = values.Area;
      farmInformation.Fields[fieldIndex].Comments = values.Comments;
      updateFarmDetails(farmInformation);
      setSubmitting(false);
    }, 400);
  };

  const addFarmInfo = (values: SubmissionValues) => {
    const farmInfo: FarmDetailsInterface = { ...fieldsInfo };
    farmInfo.Fields.push({
      FieldName: values.FieldName,
      Area: values.Area,
      Comments: values.Comments,
    });
    console.log(farmInfo);
    setFieldsInfo(farmInfo);
    setFieldIndex((prevIndex) => prevIndex + 1);
    setSubmitted(true);
  };

  return !isSubmitted ? (
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
                  actions="secondary"
                  text={ComponentText.CANCEL}
                />
                <Button
                  type="button"
                  size="sm"
                  disabled={false}
                  text={ComponentText.ADD}
                  handleClick={() => addFarmInfo(values)}
                />
              </StyledButtonGroupContainer>
            </StyledTextAreaContainer>
          </StyledFarmInfo>
        </Form>
      )}
    </Formik>
  ) : (
    <StyledFieldInfoList>
      <StyledListContainer>
        <StyledListItem width="20%">
          <h4>Field Name</h4>
          <p>{fieldsInfo.Fields[fieldIndex].FieldName}</p>
        </StyledListItem>
        <StyledListItem width="20%">
          <h4>Area</h4>
          <p>{fieldsInfo.Fields[fieldIndex].Area}</p>
        </StyledListItem>
        <StyledCommentContainerDesktop>
          <StyledListItem width="100%">
            <h4>Comments (optional)</h4>
            <p>{fieldsInfo.Fields[fieldIndex].Comments}</p>
          </StyledListItem>
        </StyledCommentContainerDesktop>
        <StyledFontAwesomeContainer>
          <FontAwesomeIcon icon={faPencil} />
          <FontAwesomeIcon icon={faTrash} />
        </StyledFontAwesomeContainer>
      </StyledListContainer>
      <StyledCommentContainerMobile>
        <StyledListItem width="100%">
          <h4>Field Comments (optional)</h4>
          <p>{fieldsInfo.Fields[fieldIndex].Comments}</p>
        </StyledListItem>
      </StyledCommentContainerMobile>
      <Button
        type="button"
        size="md"
        disabled={false}
        radius="50px"
        actions="secondary"
        text={ComponentText.ADD}
      />
    </StyledFieldInfoList>
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
