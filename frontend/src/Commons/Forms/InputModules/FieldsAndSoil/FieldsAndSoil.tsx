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
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import soilTestOptions from '@Constants/SoilTestOptions';
import emptyFieldDetails from '@Constants/EmptyFieldDetails';
import FieldsButtonComponent from './FieldsButtonComponent';
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
  StyledSelectContainer,
  InputFieldsGroup,
  SingleInputField,
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
    TestingMethod: Yup.string().when('hasSoilTest', (hasSoilTest) => (hasSoilTest
      ? Yup.string().notRequired()
      : Yup.string().required('Must enter Testing Method'))),
    sampleDate: Yup.string().when('hasSoilTest', (hasSoilTest) => (hasSoilTest ? Yup.string().notRequired() : Yup.string().required('Must enter Sample Date'))),
    valNO3H: Yup.number().when('hasSoilTest', (hasSoilTest) => (hasSoilTest ? Yup.number().notRequired() : Yup.number().required('Required'))),
    valP: Yup.number().when('hasSoilTest', (hasSoilTest) => (hasSoilTest ? Yup.number().notRequired() : Yup.number().required('Required'))),
    valK: Yup.number().when('hasSoilTest', (hasSoilTest) => (hasSoilTest ? Yup.number().notRequired() : Yup.number().required('Required'))),
    valPH: Yup.number().when('hasSoilTest', (hasSoilTest) => (hasSoilTest ? Yup.number().notRequired() : Yup.number().required('Required'))),
    leafTissueP: Yup.number().when('hasLeafTest', (hasLeafTest) => (hasLeafTest ? Yup.number().notRequired() : Yup.number().required('Required'))),
    leafTissueK: Yup.number().when('hasLeafTest', (hasLeafTest) => (hasLeafTest ? Yup.number().notRequired() : Yup.number().required('Required'))),
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
        SoilTest: {
          TestingMethod: values.SoilTest.TestingMethod,
          sampleDate: values.SoilTest.sampleDate,
          valNO3H: values.SoilTest.valNO3H,
          valP: values.SoilTest.valP,
          valK: values.SoilTest.valK,
          valPH: values.SoilTest.valPH,
        },
        hasLeafTest: values.hasLeafTest,
        LeafTest: {
          leafTissueP: values.LeafTest.leafTissueP,
          leafTissueK: values.LeafTest.leafTissueK,
        },
      });
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
    setInitialFieldValues(emptyFieldDetails);
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
                  <HeaderLabel>
                    <h3>Add Soil Test</h3>
                  </HeaderLabel>
                  <StyledRadioGroupContainer>
                    {radioOptions.map((option) => (
                      <CustomRadioButton
                        key={option.id}
                        label={option.label}
                        id={`hasSoilTest${option.id}`}
                        name="hasSoilTest"
                        type="radio"
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
                  {values.hasSoilTest === false && (
                    <StyledWarningBlock>
                      <p>
                        For fields without a soil test, very high soil P and K fertility and a pH of
                        4.0 will be assumed.
                      </p>
                    </StyledWarningBlock>
                  )}
                  {values.hasSoilTest && (
                    <>
                      <StyledSelectContainer>
                        <CustomSelect
                          name="SoilTest.TestingMethod"
                          id="SoilTest.TestingMethod"
                          label="Lab (Soil Test Methods)"
                          options={soilTestOptions}
                        />
                      </StyledSelectContainer>
                      <HeaderLabel>Soil Test values (top 6 inches of soil)</HeaderLabel>
                      <InputFieldsGroup>
                        <CustomField
                          label="Sample Month"
                          id="SoilTest.sampleDate"
                          name="SoilTest.sampleDate"
                          type="text"
                        />
                        <CustomField
                          label="NO3-N (ppm), nitrate-nitrogen"
                          id="SoilTest.valNO3H"
                          name="SoilTest.valNO3H"
                          type="number"
                        />
                      </InputFieldsGroup>
                      <InputFieldsGroup>
                        <CustomField
                          label="P (ppm), phosphorous"
                          id="SoilTest.valP"
                          name="SoilTest.valP"
                          type="number"
                        />
                        <CustomField
                          label="K (ppm), potassium"
                          id="SoilTest.valK"
                          name="SoilTest.valK"
                          type="number"
                        />
                      </InputFieldsGroup>
                      <SingleInputField>
                        <CustomField
                          label="pH"
                          id="SoilTest.valPH"
                          name="SoilTest.valPH"
                          type="number"
                        />
                      </SingleInputField>
                    </>
                  )}
                </StyledTestContainer>
                <StyledTestContainer>
                  <HeaderLabel>
                    <h3>Add Leaf Test</h3>
                  </HeaderLabel>
                  <StyledRadioGroupContainer>
                    {radioOptions.map((option) => (
                      <CustomRadioButton
                        key={option.id}
                        label={option.label}
                        id={`hasLeafTest${option.id}`}
                        name="hasLeafTest"
                        type="radio"
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
                {values.hasLeafTest && (
                  <InputFieldsGroup>
                    <CustomField
                      label="Leaf tissue P (%)"
                      id="LeafTest.leafTissueP"
                      name="LeafTest.leafTissueP"
                      type="number"
                    />
                    <CustomField
                      label="Leaf tissue K (%)"
                      id="LeafTest.leafTissueK"
                      name="LeafTest.leafTissueK"
                      type="number"
                    />
                  </InputFieldsGroup>
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
