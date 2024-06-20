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
  StyledButtonContainer,
  StyledAddCancelButtonContainer,
  StyledNewFieldButtonContainer,
} from './FieldsAndSoil.style';

const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const [fieldsInfo, setFieldsInfo] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [fieldAdd, setFieldAdd] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number().min(1).max(100).required('Required'),
    Comments: Yup.string().max(200),
  });
  const initialFieldValues = initialFarmDetails.Fields[fieldIndex];
  const submitData = () => {
    const farmInfo: FarmDetailsInterface = { ...farmDetails };
    updateFarmDetails(farmInfo);
    console.log('data submitted');
    setFieldIndex((prevIndex) => prevIndex + 1);
    setSubmitted(true);
    setFieldAdd(false);
  };
  const addFarmInfo = (values: FieldDetailInterface) => {
    const farmInfo: FarmDetailsInterface = { ...farmDetails };
    farmInfo.Fields.push({
      FieldName: values.FieldName,
      Area: values.Area,
      Comments: values.Comments,
    });
    setFieldsInfo(farmInfo);
    setFieldIndex((prevIndex) => prevIndex + 1);
    setSubmitted(true);
    setFieldAdd(false);
  };

  const addNewField = () => {
    setFieldAdd(true);
  };
  return (
    <>
      {isSubmitted && (
        <Formik
          initialValues={initialFieldValues}
          validationSchema={validationSchema}
          onSubmit={submitData}
        >
          {({ values }) => (
            <Form>
              <StyledFieldInfoList>
                {fieldsInfo.Fields.slice(1).map((fields) => (
                  <>
                    <StyledListContainer key={fields.FieldName}>
                      <StyledListItem width="30%">
                        <h4>Field Name</h4>
                        <p key={fields.FieldName}>{fields.FieldName}</p>
                      </StyledListItem>
                      <StyledListItem width="20%">
                        <h4>Area</h4>
                        <p key={fields.Area}>{fields.Area}</p>
                      </StyledListItem>
                      <StyledCommentContainerDesktop>
                        <StyledListItem width="90%">
                          <h4>Field Comments (optional)</h4>
                          <p key={fields.Comments}>{fields.Comments}</p>
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
                        <p key={fields.Comments}>{fields.Comments}</p>
                      </StyledListItem>
                    </StyledCommentContainerMobile>
                    <StyledDivider />
                  </>
                ))}
                {!fieldAdd && (
                  <StyledButtonGroupContainer>
                    <StyledNewFieldButtonContainer>
                      <StyledButtonContainer>
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
                      </StyledButtonContainer>
                    </StyledNewFieldButtonContainer>
                    <StyledAddCancelButtonContainer>
                      <StyledButtonContainer>
                        <Button
                          type="reset"
                          size="sm"
                          disabled={false}
                          actions="secondary"
                          text={ComponentText.BACK}
                        />
                      </StyledButtonContainer>
                      <StyledButtonContainer>
                        <Button
                          type="submit"
                          size="sm"
                          disabled={false}
                          text={ComponentText.NEXT}
                          handleClick={submitData}
                        />
                      </StyledButtonContainer>
                    </StyledAddCancelButtonContainer>
                  </StyledButtonGroupContainer>
                )}
              </StyledFieldInfoList>
            </Form>
          )}
        </Formik>
      )}
      {(fieldAdd || !isSubmitted) && (
        <Formik
          initialValues={initialFieldValues}
          validationSchema={validationSchema}
          onSubmit={submitData}
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
      )}
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
