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
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ComponentText from '@Constants/ComponentText';
import Button from '@Commons/Button/Button';
import CustomField from '@Commons/Input/Field/CustomField';
import CustomTextArea from '@Commons/Input/TextArea/CustomTextArea';
import CustomRadioButton from '@Commons/Input/RadioButton/CustomRadioButton';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import ButtonGroup from '@Commons/Button/FieldButtonGroup';
import FieldsListComponent from './FieldsListComponent';
import {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledAreaContainer,
  StyledButtonGroupContainer,
  StyledTestContainer,
  StyledRadioGroupContainer,
  HeaderLabel,
  StyledWarningBlock,
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
  // For checked attribute
  const [isSoilTestEnabled, setSoilTestEnabled] = useState<boolean | null>(null);
  const [isLeafTestEnabled, setLeafTestEnabled] = useState<boolean | null>(null);
  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number()
      .min(1, 'Area should be higher than 1')
      .max(100, 'Area should be lower than 100')
      .required('Required'),
    Comment: Yup.string().max(200, 'Comments should be lower than 200 chars'),
    hasSoilTest: Yup.boolean().nullable().required('A Soil Test must be either `Yes` or `No`'),
    hasLeafTest: Yup.boolean().nullable().required('A Leaf Test must be either `Yes` or `No`'),
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
        hasSoilTest: values.hasSoilTest,
        hasLeafTest: values.hasLeafTest,
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
    setSoilTestEnabled(null);
    setLeafTestEnabled(null);
  };

  const radioOptions = [
    { id: 'true', label: 'Yes', value: true },
    { id: 'false', label: 'No', value: false },
  ];
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
            <ButtonGroup
              addNewField={addNewField}
              submitFarmInfo={submitFarmInfo}
              handleFormState={handleFormState}
              buttonText={{
                addField: ComponentText.ADD_FIELD,
                back: ComponentText.BACK,
                next: ComponentText.NEXT,
              }}
              disabled={false}
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
          {({ setFieldValue, values }) => (
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
                <StyledTestContainer>
                  <HeaderLabel>Add Soil Test</HeaderLabel>
                  <StyledRadioGroupContainer>
                    {radioOptions.map((option) => (
                      <CustomRadioButton
                        key={option.id}
                        label={option.label}
                        id={`hasSoilTest${option.id}`}
                        name="hasSoilTest"
                        type="radio"
                        width="20%"
                        checked={isSoilTestEnabled === option.value}
                        onChange={() => {
                          setFieldValue('hasSoilTest', option.value);
                          setSoilTestEnabled(option.value);
                        }}
                      />
                    ))}
                  </StyledRadioGroupContainer>
                  <ErrorMessage
                    name="hasSoilTest"
                    component="div"
                    className="errorMessage"
                  />
                </StyledTestContainer>
                {values.hasSoilTest === false && (
                  <StyledWarningBlock>
                    <p>
                      For fields without a soil test, very high soil P and K fertility and a pH of
                      4.0 will be assumed.
                    </p>
                  </StyledWarningBlock>
                )}
                {values.hasSoilTest && <p>Soil Test is Enabled!</p>}
                <StyledTestContainer>
                  <HeaderLabel>Add Leaf Test</HeaderLabel>
                  <StyledRadioGroupContainer>
                    {radioOptions.map((option) => (
                      <CustomRadioButton
                        key={option.id}
                        label={option.label}
                        id={`hasLeafTest${option.id}`}
                        name="hasLeafTest"
                        type="radio"
                        width="20%"
                        checked={isLeafTestEnabled === option.value}
                        onChange={() => {
                          setFieldValue('hasLeafTest', option.value);
                          setLeafTestEnabled(option.value);
                        }}
                      />
                    ))}
                  </StyledRadioGroupContainer>
                  <ErrorMessage
                    name="hasLeafTest"
                    component="div"
                    className="errorMessage"
                  />
                </StyledTestContainer>
                {values.hasLeafTest === false && (
                  <StyledWarningBlock>
                    <ul>
                      <li>
                        For fields without a leaf test, high leaf P and K content will be assumed.
                      </li>
                      <li>Crop P and K requirements will be 0 on fields without a leaf test.</li>
                    </ul>
                  </StyledWarningBlock>
                )}
                {values.hasLeafTest && <p>Leaf Test is Enabled!</p>}
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
