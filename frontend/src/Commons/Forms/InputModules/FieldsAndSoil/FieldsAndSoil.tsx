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
import CustomRadioButton from '@Commons/Input/RadioButton/CustomRadioButton';
import { faWheatAwn, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldsButtonComponent from './FieldsButtonComponent';
import FieldsListComponent from './FieldsListComponent';
import {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledAreaContainer,
  StyledButtonGroupContainer,
  StyledRadioGroupContainer,
  HeaderLabel,
} from './FieldsAndSoil.style';


const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
}) => {
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
  // String instead of boolean so there's no default choice in the beginning.
  const [isSoilTestEnabled, setSoilTestEnabled] = useState<string>('');
  // String instead of boolean so there's no default choice in the beginning.
  const [isLeafTestEnabled, setLeafTestEnabled] = useState<string>('');
  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number()
      .min(1, 'Area should be higher than 1')
      .max(100, 'Area should be lower than 100')
      .required('Required'),
    Comment: Yup.string().max(200, 'Comments should be lower than 200 chars'),
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
        Comment: values.Comment,
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

  console.log(isSoilTestEnabled);
  return (
    <>
      {isSubmitted && (
        <>
          <FieldsListComponent
            farmDetails={farmDetails}
            updateFarmDetails={updateFarmDetails}
            handleFormState={handleFormState}
          />
          {!isFieldAdded && (
            <FieldsButtonComponent
              addNewField={addNewField}
              submitFarmInfo={submitFarmInfo}
              handleFormState={handleFormState}
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
          {({ handleChange }) => (
            <Form>
              <StyledFarmInfo>
                <div id="inputContainer">
                  <CustomField
                    label="Field name"
                    id="FieldName"
                    name="FieldName"
                    type="text"
                  />
                  <StyledAreaContainer>
                    <CustomField
                      label="Area"
                      id="Area"
                      name="Area"
                      type="number"
                      width="50%"
                    />
                    <p>Acres</p>
                  </StyledAreaContainer>
                </div>
                <StyledTextAreaContainer>
                  <CustomTextArea
                    name="Comment"
                    id="Comment"
                    label="Comments (optional)"
                    placeholder="e.g., poor drainage in southwest corner (no need to specify crop here)"
                    width="70%"
                  />
                </StyledTextAreaContainer>
                <HeaderLabel>
                  Add Soil Test
                  <span>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                </HeaderLabel>
                <StyledRadioGroupContainer>
                  <CustomRadioButton
                    label="Yes"
                    id="SoilTestYes"
                    name="SoilTestYes"
                    type="radio"
                    width="20%"
                    value="true"
                    checked={isSoilTestEnabled === 'true'}
                    onChange={(e) => {
                      handleChange(e);
                      setSoilTestEnabled('true');
                    }}
                  />
                  <CustomRadioButton
                    label="No"
                    id="SoilTestNo"
                    name="SoilTestNo"
                    type="radio"
                    width="20%"
                    value="true"
                    checked={isSoilTestEnabled === 'false'}
                    onChange={(e) => {
                      handleChange(e);
                      setSoilTestEnabled('false');
                    }}
                  />
                </StyledRadioGroupContainer>
                { isSoilTestEnabled === 'true' && (
                  // SKELETON!!
                  <p>Soil Test is Enabled!</p>
                )}
                <HeaderLabel>
                  Add Leaf Test
                  <span>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                </HeaderLabel>
                <StyledRadioGroupContainer>
                  <CustomRadioButton
                    label="Yes"
                    id="LeafTestYes"
                    name="LeafTestYes"
                    type="radio"
                    width="20%"
                    value="true"
                    checked={isLeafTestEnabled === 'true'}
                    onChange={(e) => {
                      handleChange(e);
                      setLeafTestEnabled('true');
                    }}
                  />
                  <CustomRadioButton
                    label="No"
                    id="LeafTestNo"
                    name="LeafTestNo"
                    type="radio"
                    width="20%"
                    value="true"
                    checked={isLeafTestEnabled === 'false'}
                    onChange={(e) => {
                      handleChange(e);
                      setLeafTestEnabled('false');
                    }}
                  />
                </StyledRadioGroupContainer>
                { isLeafTestEnabled === 'true' && (
                  // SKELETON!!
                  <p>Leaf Test is Enabled!</p>
                )}
                <StyledButtonGroupContainer>
                  <Button
                    type="reset"
                    size="lg"
                    disabled={false}
                    actions="secondary"
                    text={ComponentText.CANCEL}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={false}
                    text={ComponentText.ADD}
                  />
                </StyledButtonGroupContainer>
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
