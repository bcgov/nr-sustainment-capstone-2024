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
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import FieldsButtonComponent from './FieldsButtonComponent';
import FieldsListComponent from './FieldsListComponent';
import { StyledFarmInfo, StyledTextAreaContainer } from './FieldsAndSoil.style';
import { StyledButtonGroupContainer } from './FieldsButtonComponent.styles';

const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  // Builds field info inside the field form module.
  const [, setFieldsInfo] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [initialFieldValues, setInitialFieldValues] = useState(
    initialFarmDetails.Fields[fieldIndex],
  );
  // Only triggered once, it would show list and persists.
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  // Would trigger when new field button is clicked.
  const [isFieldAdded, setFieldAdd] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number()
      .min(1, 'Area should be higher than 1')
      .max(100, 'Area should be lower than 100')
      .required('Required'),
    Comments: Yup.string().max(200, 'Comments should be lower than 200 chars'),
  });
  /**
   *
   * @param values : It's of type FieldDetailInterface, it calls, FieldName, Area, and Comments
   * @desc         User data is inputted and then pushed into FarmDetailsInterface,
   *               initial values for formik is then set to empty values, state hooks gets triggered
   * @author       @Kcaparas
   */
  const addFieldData = (values: FieldDetailInterface): void => {
    setTimeout(() => {
      const farmInfo: FarmDetailsInterface = { ...farmDetails };
      farmInfo.Fields.push({
        Id: fieldIndex,
        FieldName: values.FieldName,
        Area: values.Area,
        Comments: values.Comments,
      });
      setInitialFieldValues(farmInfo.Fields[0]);
      setFieldsInfo(farmInfo);
      setFieldIndex((prevIndex) => prevIndex + 1);
      setSubmitted(true);
      setFieldAdd(false);
    }, 400);
  };
  /**
   * @desc    updateFarmDetails goes into the new form. Refer to MainPage.tsx
   * @author  @Kcaparas
   */
  const submitFarmInfo = () => {
    const farmInfo: FarmDetailsInterface = { ...farmDetails };
    updateFarmDetails(farmInfo);
  };

  const addNewField = () => {
    setFieldAdd(true);
  };
  return (
    <>
      {isSubmitted && (
        <>
          <FieldsListComponent
            farmDetails={farmDetails}
            updateFarmDetails={updateFarmDetails}
          />
          {!isFieldAdded && (
            <FieldsButtonComponent
              addNewField={addNewField}
              submitFarmInfo={submitFarmInfo}
            />
          )}
        </>
      )}
      {(isFieldAdded || !isSubmitted) && (
        <Formik
          initialValues={initialFieldValues}
          validationSchema={validationSchema}
          onSubmit={addFieldData}
        >
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
                  width="50%"
                />
              </div>
              <StyledTextAreaContainer>
                <CustomTextArea
                  name="Comments"
                  id="Comments"
                  label="Comments (optional)"
                  placeholder="e.g., poor drainage in southwest corner (no need to specify crop here)"
                  width="70%"
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
                    type="submit"
                    size="sm"
                    disabled={false}
                    text={ComponentText.ADD}
                  />
                </StyledButtonGroupContainer>
              </StyledTextAreaContainer>
            </StyledFarmInfo>
          </Form>
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
