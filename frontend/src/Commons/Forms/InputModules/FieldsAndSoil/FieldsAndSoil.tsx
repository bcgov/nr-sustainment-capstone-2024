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
import { faWheatAwn, faPencil, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
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
  StyledDivider,
} from './FieldsAndSoil.style';


const initialFieldValues = initialFarmDetails.Fields[0];

const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const [fieldsInfo, setFieldsInfo] = useState(farmDetails);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [fieldAdd, setFieldAdd] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number().min(1).max(100).required('Required'),
    Comments: Yup.string().max(200),
  });

  const onSubmit = (
    values: FieldDetailInterface,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): void => {
    setTimeout(() => {
      const newFarmDetails: FarmDetailsInterface = { ...farmDetails };
      const newField: FieldDetailInterface = initialFieldValues;
      newField.FieldName = values.FieldName;
      newField.Area = values.Area;
      newField.Comments = values.Comments;
      newFarmDetails.Fields.push(newField);
      updateFarmDetails(newFarmDetails);
      setSubmitting(false);
    }, 400);
  };

  const addFarmInfo = (values: FieldDetailInterface) => {
    const newFarmDetails: FarmDetailsInterface = { ...farmDetails };
    const newField: FieldDetailInterface = initialFieldValues;
    newField.FieldName = values.FieldName;
    newField.Area = values.Area;
    newField.Comments = values.Comments;
    newFarmDetails.Fields.push(newField);
    setFieldsInfo(newFarmDetails);
    setSubmitted(true);
    setFieldAdd(false);
  };

  const addNewField = () => {
    setFieldAdd(true);
  };
  return (
    <>
      {isSubmitted ? (
        <StyledFieldInfoList>
          { farmDetails.Fields.slice(1).map((fields) => (
            <>
              <StyledListContainer key={fields.FieldName}>
                <StyledListItem width="20%">
                  <h4>Field Name</h4>
                  <p key={fields.FieldName}>{fields.FieldName}</p>
                </StyledListItem>
                <StyledListItem width="20%">
                  <h4>Area</h4>
                  <p key={fields.Area}>{fields.Area}</p>
                </StyledListItem>
                <StyledCommentContainerDesktop>
                  <StyledListItem width="80%">
                    <h4>Field Comments (optional)</h4>
                    <p key={fields.Comments}>{fields.Comments}</p>
                  </StyledListItem>
                </StyledCommentContainerDesktop>
                <StyledFontAwesomeContainer>
                  <FontAwesomeIcon icon={faPencil} />
                  <FontAwesomeIcon icon={faTrash} />
                </StyledFontAwesomeContainer>
                <StyledCommentContainerMobile>
                  <StyledListItem width="100%">
                    <h4>Field Comments (optional)</h4>
                    <p key={fields.Comments}>{fields.Comments}</p>
                  </StyledListItem>
                </StyledCommentContainerMobile>
              </StyledListContainer>
              <StyledDivider />
            </>
          ))}
          {!fieldAdd ? (
            <Button
              type="button"
              size="md"
              disabled={false}
              radius="50px"
              actions="secondary"
              text={ComponentText.NEWFIELD}
              handleClick={addNewField}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          ) : null}
        </StyledFieldInfoList>
      ) : null}
      {fieldAdd || !isSubmitted ? (
        <Formik
          initialValues={initialFieldValues}
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
      ) : null}
    </>
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
