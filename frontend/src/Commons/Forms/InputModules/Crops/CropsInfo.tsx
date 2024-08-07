/*
 * @summary Crops Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @Kcaparas
 */
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faSeedling, faPlus } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import { useState, FC } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import ComponentText from '@Constants/ComponentText';
import Button from '@Commons/Button/Button';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';
import { CROPS_INFORMATION } from '@Constants/ModuleIDs';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import handleChange from '@Utils/handleChange';
import {
  CropIDOptions,
  PlantAgeOptions,
  DistanceBtwnPlants,
  DistanceBtwnRows,
  YesOrNo,
  WherePruningsGo,
  PlantsPerAcreOptions,
} from '@Constants/CropOptions';
import CustomField from '@Commons/Input/Field/CustomField';
import { StyledFarmInfo, StyledButtonGroupContainer } from '@Commons/FormStyles.styles';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyledNewFieldButtonContainer,
  StyledNewFieldButtonController,
} from '@Commons/Button/FieldButtonGroup.styles';
import StatusValidate from '@Utils/StatusValidate';
import { ACTIVE } from '@Constants/ModuleStatus';
import CropsList from './CropsList';
import {
  StyledCropsSmallGroup,
  StyledCropsLargeGroup,
  StyledAddCancelButtonGroup,
  StyledNoCropsInfoContainer,
} from './CropsInfo.styles';
import CropsButtonGroup from './CropsButtonGroup';

const checkHasCrops = (Fields: FieldDetailInterface[]) => {
  let hasCrop = false;
  Fields.forEach((field) => {
    if (field.Crops.length > 0) {
      hasCrop = true;
    }
  });
  return hasCrop;
};

/**
 * @summary     Interface for the main data file
 * @description This interface will be for Submission, it works the same as the CropsDetailInterface
 *              but this is only for the submission of formik.
 * @author      @Kcaparas
 */
interface SubmissionCropsInterface {
  id: number;
  cropId: string;
  yield: number;
  plantAgeYears: string;
  numberOfPlantsPerAcre: number;
  distanceBtwnPlants: string;
  distanceBtwnRows: string;
  willPlantsBePruned: boolean | undefined;
  whereWillPruningsGo: string;
  willSawdustBeApplied: boolean | undefined;
}

const initialValues: SubmissionCropsInterface = initialFarmDetails.Fields[0].Crops[0];

const CropsInfoComponent: FC<InputModuleProps> = ({
  farmDetails,
  updateFarmDetails,
  handleFormState,
  toggleEnabled,
}) => {
  const [, setCropsInfo] = useState(farmDetails);
  const [cropInitialValues, setInitialFieldValues] = useState(initialValues);
  // Only triggered once, it would show list and persists.
  const [fieldHasCrop, setFieldHasCrop] = useState<boolean>(checkHasCrops(farmDetails.Fields));
  const [hasFieldBeenSelected, setFieldSelected] = useState<boolean[]>(
    Array(farmDetails.Fields.length).fill(false),
  );
  const [plantsPerHa, setplantsPerHa] = useState<number>(0);
  const fieldLength = farmDetails.Fields.length;
  const BlueberrySchemaNumber = (cropId: string, message: string = 'Required') =>
    Yup.number().when(cropId, (value, schema) =>
      value.toString() === 'Blueberry' ? schema.required(message) : schema.notRequired(),
    );

  const BlueberrySchemaString = (cropId: string, message: string = 'Required') =>
    Yup.string().when(cropId, (value, schema) =>
      value.toString() === 'Blueberry' ? schema.required(message) : schema.notRequired(),
    );

  const validationSchema = Yup.object().shape({
    cropId: Yup.string().required('Required'),
    yield: Yup.number().positive().max(100).required('Required'),
    plantAgeYears: BlueberrySchemaString('cropId'),
    numberOfPlantsPerAcre: BlueberrySchemaNumber('cropId'),
    distanceBtwnPlants: BlueberrySchemaString('cropId'),
    distanceBtwnRows: BlueberrySchemaString('cropId'),
    willPlantsBePruned: Yup.boolean().required('Required'),
    whereWillPruningsGo: Yup.string().required('Required'),
    willSawdustBeApplied: Yup.boolean().required('Required'),
  });

  function getPlantsPerAcre(index: number) {
    return parseInt(PlantsPerAcreOptions[index].value, 10);
  }

  const appendDistanceBtwnPlants = (v1: string, v2: string): string => {
    const distanceCombination = `${v1}x${v2}`;
    let res = '';

    switch (distanceCombination) {
      case '0.6x2.7':
        res = '(2ft x 9ft)';
        setplantsPerHa(getPlantsPerAcre(5));
        break;
      case '0.6x3.0':
        res = '(2ft x 10ft)';
        setplantsPerHa(getPlantsPerAcre(4));
        break;
      case '0.75x2.7':
        res = '(2.5ft x 9ft)';
        setplantsPerHa(getPlantsPerAcre(3));
        break;
      case '0.75x3.0':
        res = '(2.5ft x 10ft)';
        setplantsPerHa(getPlantsPerAcre(2));
        break;
      case '0.9x2.7':
        res = '(3ft x 9ft)';
        setplantsPerHa(getPlantsPerAcre(1));
        break;
      case '0.9x3.0':
        res = '(3ft x 10ft)';
        setplantsPerHa(getPlantsPerAcre(0));
        break;
      default:
        break;
    }

    return `${v1} m x ${v2} m ${res}`;
  };

  const showFormHandler = (index: number) => {
    setFieldSelected((prevState) =>
      prevState.map((showForm, idx) => (idx === index ? !showForm : showForm)),
    );
  };

  const addCrop = (values: SubmissionCropsInterface, fieldIdx: number, cropIdx: number): void => {
    const newCrop: CropsDetailsInterface = {
      id: cropIdx,
      cropId: values.cropId,
      yield: values.yield,
      plantAgeYears: values.plantAgeYears,
      numberOfPlantsPerAcre: plantsPerHa,
      distanceBtwnPlantsRows: appendDistanceBtwnPlants(
        values.distanceBtwnPlants,
        values.distanceBtwnRows,
      ),
      willPlantsBePruned: values.willPlantsBePruned,
      whereWillPruningsGo: values.whereWillPruningsGo,
      willSawdustBeApplied: values.willSawdustBeApplied,
    };

    setTimeout(() => {
      farmDetails.Fields[fieldIdx].Crops.push(newCrop);
      setCropsInfo(farmDetails);
      showFormHandler(fieldIdx);
      setInitialFieldValues(initialValues);
      setFieldHasCrop(checkHasCrops(farmDetails.Fields));
    }, 400);
  };

  const submitFarmInfo = () => {
    updateFarmDetails(farmDetails, CROPS_INFORMATION);
  };

  const sawDustInfo: string =
    'Sawdust and other materials with a high carbon to nitrogen ratio (C:N) will immobilize plant-available nitrogen in the soil. Selecting ‘Yes’ to this question will increase the amount of nitrogen that needs to be applied to ensure the crop receives enough nitrogen for optimal growth and yield.';

  return (
    <>
      {farmDetails.Fields.map((field: FieldDetailInterface, index: number) => (
        <div key={`${field.FieldName}${field.Area}${field.Comment}`}>
          <CropsList
            field={field}
            farmDetails={farmDetails}
          />

          <Formik
            initialValues={cropInitialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              addCrop(values, index, field.Crops.length);
              resetForm();
            }}
            validate={(values) => {
              StatusValidate(validationSchema, values, handleFormState, CROPS_INFORMATION);
              appendDistanceBtwnPlants(values.distanceBtwnPlants, values.distanceBtwnRows);
            }}
          >
            {({ values, setFieldValue }) =>
              hasFieldBeenSelected[index] && (
                <Form>
                  <StyledFarmInfo>
                    <StyledCropsSmallGroup>
                      <CustomSelect
                        name="cropId"
                        id="cropId"
                        label="Crop"
                        options={CropIDOptions}
                        desktopWidth="226px"
                        mobileWidth="137px"
                        CropField
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                      <CustomField
                        label="Yield"
                        id="yield"
                        name="yield"
                        type="number"
                        isYield
                        acres="tons/ac"
                        desktopWidth="161px"
                        mobileWidth="137px"
                      />
                    </StyledCropsSmallGroup>
                    {values.cropId === '75' && (
                      <>
                        <StyledCropsSmallGroup>
                          <CustomSelect
                            name="plantAgeYears"
                            id="plantAgeYears"
                            label="Plant age (Years)"
                            options={PlantAgeOptions}
                            desktopWidth="226px"
                            mobileWidth="137px"
                            onChange={(e) => handleChange(e, setFieldValue)}
                          />
                          <div id="plantsPerHa">
                            <p id="plantsPerHaLabel">Plants per Acre</p>
                            <p>{plantsPerHa}</p>
                          </div>
                        </StyledCropsSmallGroup>
                        <StyledCropsLargeGroup>
                          <CustomSelect
                            name="distanceBtwnPlants"
                            id="distanceBtwnPlants"
                            label="Distance between plants"
                            options={DistanceBtwnPlants}
                            desktopWidth="226px"
                            mobileWidth="137px"
                            onChange={(e) => handleChange(e, setFieldValue)}
                          />
                          <CustomSelect
                            name="distanceBtwnRows"
                            id="distanceBtwnRows"
                            label="Distance between rows"
                            options={DistanceBtwnRows}
                            desktopWidth="226px"
                            mobileWidth="137px"
                            onChange={(e) => handleChange(e, setFieldValue)}
                          />
                        </StyledCropsLargeGroup>
                      </>
                    )}
                    <StyledCropsLargeGroup>
                      <CustomSelect
                        name="willPlantsBePruned"
                        id="willPlantsBePruned"
                        label="Will plants be pruned?"
                        options={YesOrNo}
                        desktopWidth="226px"
                        mobileWidth="137px"
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                      <CustomSelect
                        name="whereWillPruningsGo"
                        id="whereWillPruningsGo"
                        label="Where will prunings go?"
                        options={WherePruningsGo}
                        desktopWidth="226px"
                        mobileWidth="137px"
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                    </StyledCropsLargeGroup>
                    <StyledCropsLargeGroup>
                      <CustomSelect
                        name="willSawdustBeApplied"
                        id="willSawdustBeApplied"
                        label="Is sawdust or wood mulch applied within 6 months prior to the growing season?"
                        options={YesOrNo}
                        desktopWidth="226px"
                        mobileWidth="137px"
                        text={sawDustInfo}
                        rightPositioned
                        toggleEnabled={toggleEnabled}
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                    </StyledCropsLargeGroup>
                    <StyledButtonGroupContainer>
                      <Button
                        type="reset"
                        size="lg"
                        disabled={false}
                        actions="secondary"
                        text={ComponentText.CANCEL}
                        handleClick={() => showFormHandler(index)}
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
              )
            }
          </Formik>

          {!hasFieldBeenSelected[index] && field.Crops.length < 2 && (
            <StyledNewFieldButtonContainer formCrops>
              <StyledNewFieldButtonController>
                <Button
                  type="button"
                  size="lg"
                  disabled={false}
                  radius="50px"
                  actions="secondary"
                  addButton
                  text={ComponentText.ADD_CROP}
                  handleClick={() => {
                    handleFormState(CROPS_INFORMATION, undefined, ACTIVE);
                    showFormHandler(index);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </StyledNewFieldButtonController>
            </StyledNewFieldButtonContainer>
          )}
        </div>
      ))}

      {fieldHasCrop && !hasFieldBeenSelected.includes(true) && (
        <StyledAddCancelButtonGroup>
          <CropsButtonGroup
            submitFarmInfo={submitFarmInfo}
            handleFormState={handleFormState}
            buttonText={{
              back: ComponentText.BACK,
              next: ComponentText.NEXT,
            }}
            disabled // adjust in the future sprints
          />
        </StyledAddCancelButtonGroup>
      )}
      {fieldLength === 0 && (
        <StyledNoCropsInfoContainer>
          <h3>Add a field to display the contents of Crops Information</h3>
        </StyledNoCropsInfoContainer>
      )}
    </>
  );
};

const CropsInfoForm: InputModuleInterface = {
  InputModuleComponent: CropsInfoComponent,
  id: CROPS_INFORMATION,
  name: { long: 'Crops Information', short: 'Crops Info' },
  faIcon: faSeedling,
  status: 'inactive',
  enable: false,
};

export default CropsInfoForm;
