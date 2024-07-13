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
import { ACTIVE } from '@Constants/ModuleStatus';
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
} from '@Commons/FormStyles.styles';
import FieldsButtonComponent from './FieldsButtonComponent';
import FieldsListComponent from './FieldsListComponent';

const FieldsAndSoilComponent: FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  // Builds field info inside the field form module.
  const [, setFieldsInfo] = useState(farmDetails);
  const [fieldIndex, setFieldIndex] = useState(farmDetails.Fields.length);
  // Only triggered once, it would show list and persists.
  const [isSubmitted, setSubmitted] = useState<boolean>(farmDetails.Fields.length > 0);
  // Would trigger when new field button is clicked.
  const [isFieldAdded, setFieldAdd] = useState<boolean>(false);
  // For checked attribute
  // const [isSoilTestEnabled, setSoilTestEnabled] = useState<boolean | null>(null);
  // const [isLeafTestEnabled, setLeafTestEnabled] = useState<boolean | null>(null);

  const radioOptions = [
    { id: 'true', label: 'Yes', value: true },
    { id: 'false', label: 'No', value: false },
  ];
  const initialValues: FieldDetailInterface = initialFarmDetails.Fields[0];

  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number()
      .min(1, 'Area should be higher than 1')
      .max(100, 'Area should be lower than 100')
      .required('Required'),
    Comment: Yup.string().max(200, 'Comments should be lower than 200 chars'),
    HasSoilTest: Yup.boolean().nullable().required('A Soil Test must be either `Yes` or `No`'),
    HasLeafTest: Yup.boolean().nullable().required('A Leaf Test must be either `Yes` or `No`'),
    SoilTest: Yup.object().when('$HasSoilTest', {
      is: true,
      then: (schema) =>
        schema
          .shape({
            TestingMethod: Yup.string().when('$HasSoilTest', {
              is: true,
              then: (schema) => schema.required(),
              otherwise: (schema) => schema.notRequired(),
            }),
            sampleDate: Yup.string().required(),
            valNO3H: Yup.number().min(0).max(7).required(),
            ValP: Yup.number().min(0).max(7).required(),
            valK: Yup.number().min(0).max(7).required(),
            valPH: Yup.number().min(0).max(7).required(),
          })
          .required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    LeafTest: Yup.object().when('$HasSoilTest', {
      is: true,
      then: (schema) =>
        schema
          .shape({
            leafTissueP: Yup.number().min(0).max(7).required(),
            leafTissueK: Yup.number().min(0).max(7).required(),
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
      let farmInfo: FarmDetailsInterface = { ...farmDetails };

      const newField: FieldDetailInterface = {
        Id: fieldIndex,
        FieldName: values.FieldName,
        Area: values.Area,
        Comment: values.Comment,
        HasSoilTest: values.HasSoilTest,
        SoilTest: {
          TestingMethod: values.SoilTest.TestingMethod,
          sampleDate: values.SoilTest.sampleDate,
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
        Crops: [
          {
            id: 0,
            cropId: '',
            yield: 0,
            plantAgeYears: '',
            numberOfPlantsPerAcre: 0,
            distanceBtwnPlantsRows: '',
            willPlantsBePruned: false,
            whereWillPruningsGo: '',
            willSawdustBeApplied: false,
          },
        ],
      };

      farmInfo.Fields.push(newField);

      // splice or pop to remove Crops after getting pushed to array
      if (farmInfo.Fields[fieldIndex].Crops.length === 1) {
        // Crops is not optional so this line is needed
        farmInfo.Fields[fieldIndex].Crops.splice(0, 1);
      }

      setFieldsInfo(farmInfo);
      setFieldIndex((prevIndex) => prevIndex + 1);
      setSubmitted(true);
      setFieldAdd(false);
    }, 400);
  };

  const addNewField = () => {
    handleFormState(FIELDS_AND_SOIL, undefined, ACTIVE);
    setFieldAdd(true);
    // setSoilTestEnabled(null);
    // setLeafTestEnabled(null);
  };

  return (
    <>
      {isSubmitted && (
        <>
          <FieldsListComponent farmDetails={farmDetails} />
          {!isFieldAdded && (
            <FieldsButtonComponent
              addNewField={addNewField}
              updateFarmDetails={() => updateFarmDetails(farmDetails)}
              handleFormState={handleFormState}
              farmDetails={farmDetails}
            />
          )}
        </>
      )}

      {(isFieldAdded || !isSubmitted) && (
        <Formik
          initialValues={initialValues}
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
                        id={`HasSoilTest${option.id}`}
                        name="HasSoilTest"
                        type="radio"
                        // checked={isSoilTestEnabled === option.value}
                        onChange={() => {
                          setFieldValue('HasSoilTest', option.value);
                          // setSoilTestEnabled(option.value);
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
                          id="SoilTest.ValP"
                          name="SoilTest.ValP"
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
                  <HeaderLabel>Add Leaf Test</HeaderLabel>
                  <StyledRadioGroupContainer>
                    {radioOptions.map((option) => (
                      <CustomRadioButton
                        key={option.id}
                        label={option.label}
                        id={`HasLeafTest${option.id}`}
                        name="HasLeafTest"
                        type="radio"
                        // checked={isLeafTestEnabled === option.value}
                        onChange={() => {
                          setFieldValue('HasLeafTest', option.value);
                          // setLeafTestEnabled(option.value);
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
  id: FIELDS_AND_SOIL,
  name: { long: 'Fields and Soil', short: 'Fields' },
  faIcon: faWheatAwn,
  enable: false,
  status: 'inactive',
};

export default FieldsAndSoil;
