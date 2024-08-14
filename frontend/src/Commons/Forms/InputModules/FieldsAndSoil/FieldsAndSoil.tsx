/**
 * @summary     Field and Soil Input Module
 * @description Fields and Soil Input Module that asks user input on Field Name, Area,
 *              Optional Comments. This will be implemented further in the next tickets.
 * @author      @Kcaparas
 */
import { useState, FC } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@Commons/Button/Button';
import CustomField from '@Commons/Input/Field/CustomField';
import CustomTextArea from '@Commons/Input/TextArea/CustomTextArea';
import CustomRadioButton from '@Commons/Input/RadioButton/CustomRadioButton';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import ComponentText from '@Constants/ComponentText';
import { FIELDS_AND_SOIL } from '@Constants/ModuleIDs';
import soilTestOptions from '@Constants/SoilTestOptions';
import InputModuleInterface from '@Interface/InputModuleinterface';
import InputModuleProps from '@Interface/InputModuleProps';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import StatusValidate from '@Utils/StatusValidate';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import handleChange from '@Utils/handleChange';
import InformationIcons from '@Commons/InformationIcons/InformationIcons';
import { ACTIVE } from '@Constants/ModuleStatus';
import {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
  StyledTestContainer,
  StyledRadioGroupContainer,
  HeaderLabel,
  StyledWarningBlock,
  StyledSelectContainer,
  InputFieldsGroup,
  SingleInputField,
} from '@Commons/FormStyles.styles';
import FieldsButtonComponent from './FieldsButtonComponent';
import FieldsListComponent from './FieldsListComponent';

const FieldsAndSoilComponent: FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
  toggleEnabled,
}) => {
  // Builds field info inside the field form module.
  const [, setFarmDetails] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(farmDetails.Fields.length);
  // Only triggered once, it would show list and persists.
  const [isSubmitted, setSubmitted] = useState<boolean>(farmDetails.Fields.length > 0);
  // Would trigger when new field button is clicked.
  const [isFieldAdded, setFieldAdd] = useState<boolean>(false);

  const radioOptions = [
    { id: 'true', label: 'Yes', value: true },
    { id: 'false', label: 'No', value: false },
  ];

  const initialValues: FieldDetailInterface = initialFarmDetails.Fields[0];
  const textAreaMaxLength: number = 200;
  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number()
      .min(1, 'Area should be higher than 1')
      .max(100, 'Area should be lower than 100')
      .required('Required'),
    Comment: Yup.string().max(textAreaMaxLength, 'Comments should be lower than 200 chars'),
    HasSoilTest: Yup.boolean().nullable().required('A Soil Test must be either `Yes` or `No`'),
    HasLeafTest: Yup.boolean().nullable().required('A Leaf Test must be either `Yes` or `No`'),
    SoilTest: Yup.object().when('HasSoilTest', {
      is: true,
      then: (object) =>
        object
          .shape({
            TestingMethod: Yup.string().when('HasSoilTest', {
              is: true,
              then: (schema) => schema.required('Required'),
              otherwise: (schema) => schema.notRequired(),
            }),
            sampleDate: Yup.string().required('Required'),
            valNO3H: Yup.number().min(0).max(1000).required('Required'),
            ValP: Yup.number().min(0).max(1000).required('Required'),
            valK: Yup.number().min(0).max(1000).required('Required'),
            valPH: Yup.number().min(0).max(1000).required('Required'),
          })
          .required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    LeafTest: Yup.object().when('HasLeafTest', {
      is: true,
      then: (schema) =>
        schema
          .shape({
            leafTissueP: Yup.number().min(0).max(7).required('Required'),
            leafTissueK: Yup.number().min(0).max(7).required('Required'),
          })
          .required(),
      otherwise: (schema) => schema.notRequired(),
    }),
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
      const noSoilTestVal = {
        ...values.SoilTest,
        ValP: Infinity,
        valK: Infinity,
        valPH: 4.0,
      };

      const noLeafTestVal = {
        leafTissueP: Infinity,
        leafTissueK: Infinity,
      };

      const newField: FieldDetailInterface = {
        ...(farmDetails.Fields[fieldIndex] || initialValues),
        Id: fieldIndex,
        FieldName: values.FieldName,
        Area: values.Area,
        Comment: values.Comment,
        HasSoilTest: values.HasSoilTest,
        SoilTest: {
          TestingMethod: values.SoilTest.TestingMethod,
          sampleDate: values.SoilTest.sampleDate
            ? new Date(values.SoilTest.sampleDate).toISOString()
            : null, // without this uncaught error is returned
          valNO3H: values.SoilTest.valNO3H,
          ValP: values.SoilTest.ValP,
          valK: values.SoilTest.valK,
          valPH: values.SoilTest.valPH,
        },
        HasLeafTest: values.HasLeafTest,
        LeafTest: {
          leafTissueP: values.LeafTest.leafTissueP,
          leafTissueK: values.LeafTest.leafTissueK,
        },
      };
      console.log(newField);

      if (values.HasSoilTest === false) newField.SoilTest = noSoilTestVal;
      if (values.HasLeafTest === false) newField.LeafTest = noLeafTestVal;

      if (
        farmDetails.Fields.find(
          (f) => f.FieldName === newField.FieldName && f.Area === newField.Area,
        )
      )
        removeField(newField);
      farmInfo.Fields.push(newField);

      // splice or pop to remove Crops after getting pushed to array
      // if (farmInfo.Fields[fieldIndex].Crops.length === 1) {
      //   // Crops is not optional so this line is needed
      //   farmInfo.Fields[fieldIndex].Crops.splice(0, 1);
      // }
      // if (farmInfo.Fields[fieldIndex].Nutrients.nutrientFertilizers.length === 1) {
      //   farmInfo.Fields[fieldIndex].Nutrients.nutrientFertilizers.splice(0, 1);
      // }

      setFarmDetails(farmInfo);
      setFieldIndex((prevIndex) => prevIndex + 1);
      setSubmitted(true);
      setFieldAdd(false);
    }, 400);
  };

  const removeField = (field: FieldDetailInterface) => {
    const updatedFarmDetails = { ...farmDetails };

    const idx = updatedFarmDetails.Fields.findIndex(
      (f) => f.FieldName === field.FieldName && f.Area === field.Area,
    );

    updatedFarmDetails.Fields.splice(idx, 1);
    setFarmDetails(updatedFarmDetails);
  };

  const editField = (field: FieldDetailInterface) => {
    const idx = farmDetails.Fields.findIndex(
      (f) => f.FieldName === field.FieldName && f.Area === field.Area,
    );

    setFieldIndex(idx);
    setFieldAdd(true);
    handleFormState(FIELDS_AND_SOIL, undefined, ACTIVE);
  };

  const addNewField = () => {
    handleFormState(FIELDS_AND_SOIL, undefined, ACTIVE);
    setFieldAdd(true);
  };

  const SoilTextArray: string[] = [
    'Different labs use different soil test methods for phosphorus (P) and potassium (K)',
    'Different methods give different values for the same soil sample',
    'This website converts lab report values to standard (Kelowna method-equivalent) values',
  ];
  const SoilTestValues: string =
    'Do not enter results from soil samples taken deeper than 6 inches (15cm). Do not use post-harvest nitrate tests results here';
  const Nitrate: string =
    'The amount of nitrogen available in the form of nitrate (NO3-N), and is generally expressed in ppm or mg/kg. Found on a recent soil test report.';
  const Phosporus: string =
    'The amount of available phosphorus given from a recent soil test. Generally expressed in ppm or mg/kg.';
  const Potassium: string =
    'The amount of available potassium given from a recent soil test. Generally expressed in ppm or mg/kg.';
  const pH: string =
    "Soil pH is the measure of a soil's acidity or alkalinity. Ranges between 4 and 9 in most soils.";

  return (
    <>
      {isSubmitted && (
        <>
          <FieldsListComponent
            farmDetails={farmDetails}
            removeField={removeField}
            editField={editField}
          />
          {!isFieldAdded && (
            <FieldsButtonComponent
              addNewField={addNewField}
              updateFarmDetails={() => updateFarmDetails(farmDetails, FIELDS_AND_SOIL)}
              handleFormState={handleFormState}
              farmDetails={farmDetails}
            />
          )}
        </>
      )}

      {(isFieldAdded || !isSubmitted) && (
        <Formik
          initialValues={
            fieldIndex < farmDetails.Fields.length ? farmDetails.Fields[fieldIndex] : initialValues
          }
          validationSchema={validationSchema}
          onSubmit={addFieldData}
          validate={(values) => {
            StatusValidate(validationSchema, values, handleFormState, FIELDS_AND_SOIL);
          }}
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
                    desktopWidth="392px"
                    mobileWidth="223px"
                  />
                  <CustomField
                    label="Area"
                    id="Area"
                    name="Area"
                    type="number"
                    acres="Acres"
                    desktopWidth="148px"
                    mobileWidth="130px"
                  />
                </div>
                <StyledTextAreaContainer>
                  <CustomTextArea
                    name="Comment"
                    id="Comment"
                    label="Field Comments (optional)"
                    maxLength={textAreaMaxLength}
                    placeholder="e.g., poor drainage in southwest corner (no need to specify crop here)"
                    desktopWidth="590px"
                    mobileWidth="90%"
                  />
                </StyledTextAreaContainer>

                <StyledTestContainer>
                  <HeaderLabel>
                    <h3>Add Soil Test</h3>
                    <span>
                      <InformationIcons
                        arrayText={SoilTextArray}
                        toggleEnabled={toggleEnabled}
                      />
                    </span>
                  </HeaderLabel>
                  <StyledRadioGroupContainer>
                    {radioOptions.map((option) => (
                      <CustomRadioButton
                        key={option.id}
                        label={option.label}
                        id={`HasSoilTest${option.id}`}
                        name="HasSoilTest"
                        type="radio"
                        onChange={() => {
                          setFieldValue('HasSoilTest', option.value);
                        }}
                      />
                    ))}
                  </StyledRadioGroupContainer>
                  <ErrorMessage
                    name="HasSoilTest"
                    component="div"
                    className="errorMessage"
                  />
                  {values.HasSoilTest === false && (
                    <StyledWarningBlock>
                      <p>
                        For fields without a soil test, very high soil P and K fertility and a pH of
                        4.0 will be assumed.
                      </p>
                    </StyledWarningBlock>
                  )}

                  {values.HasSoilTest && (
                    <>
                      <StyledSelectContainer>
                        <CustomSelect
                          name="SoilTest.TestingMethod"
                          id="SoilTest.TestingMethod"
                          label="Lab (Soil Test Methods)"
                          options={soilTestOptions}
                          mobileWidth="295px"
                          desktopWidth="392px"
                          onChange={(e) => handleChange(e, setFieldValue)}
                        />
                      </StyledSelectContainer>
                      <HeaderLabel>
                        <h3>Soil Test values (top 6 inches of soil)</h3>
                        <span>
                          <InformationIcons
                            text={SoilTestValues}
                            rightPositioned
                            toggleEnabled={toggleEnabled}
                          />
                        </span>
                      </HeaderLabel>
                      <InputFieldsGroup hasNO3label>
                        <CustomField
                          label="Sample Month"
                          id="SoilTest.sampleDate"
                          name="SoilTest.sampleDate"
                          type="date"
                          mobileWidth="223px"
                          desktopWidth="226px"
                        />
                        <CustomField
                          label="NO3-N (ppm), nitrate-nitrogen"
                          id="SoilTest.valNO3H"
                          name="SoilTest.valNO3H"
                          type="number"
                          desktopWidth="226px"
                          mobileWidth="223px"
                          text={Nitrate}
                          rightPositioned
                          isNO3
                          toggleEnabled={toggleEnabled}
                        />
                      </InputFieldsGroup>
                      <InputFieldsGroup>
                        <CustomField
                          label="P (ppm), phosphorous"
                          id="SoilTest.ValP"
                          name="SoilTest.ValP"
                          type="number"
                          desktopWidth="226px"
                          mobileWidth="223px"
                          text={Phosporus}
                          rightPositioned
                          toggleEnabled={toggleEnabled}
                        />
                        <CustomField
                          label="K (ppm), potassium"
                          id="SoilTest.valK"
                          name="SoilTest.valK"
                          type="number"
                          desktopWidth="226px"
                          mobileWidth="223px"
                          text={Potassium}
                          toggleEnabled={toggleEnabled}
                        />
                      </InputFieldsGroup>
                      <SingleInputField>
                        <CustomField
                          label="pH"
                          id="SoilTest.valPH"
                          name="SoilTest.valPH"
                          type="number"
                          desktopWidth="226px"
                          mobileWidth="223px"
                          text={pH}
                          toggleEnabled={toggleEnabled}
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
                        id={`HasLeafTest${option.id}`}
                        name="HasLeafTest"
                        type="radio"
                        onChange={() => {
                          setFieldValue('HasLeafTest', option.value);
                        }}
                      />
                    ))}
                  </StyledRadioGroupContainer>
                  <ErrorMessage
                    name="HasLeafTest"
                    component="div"
                    className="errorMessage"
                  />
                </StyledTestContainer>
                {values.HasLeafTest === false && (
                  <StyledWarningBlock>
                    <ul>
                      <li>
                        For fields without a leaf test, high leaf P and K content will be assumed.
                      </li>
                      <li>Crop P and K requirements will be 0 on fields without a leaf test.</li>
                    </ul>
                  </StyledWarningBlock>
                )}
                {values.HasLeafTest && (
                  <InputFieldsGroup>
                    <CustomField
                      label="Leaf tissue P (%)"
                      id="LeafTest.leafTissueP"
                      name="LeafTest.leafTissueP"
                      type="number"
                      mobileWidth="221px"
                      desktopWidth="226px"
                    />
                    <CustomField
                      label="Leaf tissue K (%)"
                      id="LeafTest.leafTissueK"
                      name="LeafTest.leafTissueK"
                      type="number"
                      mobileWidth="221px"
                      desktopWidth="226px"
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
  id: FIELDS_AND_SOIL,
  name: { long: 'Fields and Soil', short: 'Fields' },
  faIcon: faWheatAwn,
  enable: false,
  status: 'inactive',
};

export default FieldsAndSoil;
