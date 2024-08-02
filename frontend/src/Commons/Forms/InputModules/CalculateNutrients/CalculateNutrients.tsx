import { ChangeEvent, FC, useState, useEffect } from 'react';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import InputModuleInterface from '@Interface/InputModuleinterface';
import initialFarmDetails from '@Constants/InitialFarmDetails';
import ConversionCoeficient from '@Constants/ConversionCoeficient';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import InputModuleProps from '@Interface/InputModuleProps';
import { CALCULATION_INFORMATION } from '@Constants/ModuleIDs';
import FertilizerInterface from '@Interface/FertilizerInterface';
import StatusValidate from '@Utils/StatusValidate';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import OptionInterface from '@Interface/OptionInterface';
import Button from '@Commons/Button/Button';
import ComponentText from '@Constants/ComponentText';
import { StyledButtonContainer } from '@Commons/Button/FieldButtonGroup.styles';
import handleChange from '@Utils/handleChange';
import Calculate from '@Utils/Calculate/Calculate';
import MainBalanceInterface from '@Interface/MainBalanceInterface';
import CropRemovalBalanceInterface from '@Interface/CropRemovalBalance';
import AgronomicBalanceInterface from '@Interface/AgronomicBalanceInterface';
import {
  DryApplicationUnits,
  LiquidApplicationUnits,
  ApplicationMethod,
  DensityUnits,
  DryFertilizerOptions,
} from '@Constants/FertilizersOptions';
import CustomField from '@Commons/Input/Field/CustomField';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import {
  StyledFieldContainer,
  StyledFieldSelect,
  StyledGroupFormView,
  StyledLeftView,
  StyledRightView,
  StyledSmallFormGroup,
  RightListGroup,
  RightListItem,
} from './CalculateNutrients.styles';
import { StyledDivider } from '../ListComponent.styles';
import CalculationList from './CalculateNutrientsList';
import CalculationButtonGroup from './CalculateNutrientsButtonGroup';

const initialAgronomicBalance: AgronomicBalanceInterface = { N: 0, P: 0, K: 0 };
const initialCropRemovalBalance: CropRemovalBalanceInterface = { P: 0, K: 0 };
const initialBalance: MainBalanceInterface[] = [
  {
    agronomic: initialAgronomicBalance,
    cropRemoval: initialCropRemovalBalance,
  },
  {
    agronomic: initialAgronomicBalance,
    cropRemoval: initialCropRemovalBalance,
  },
];

interface FormValues extends FertilizerInterface {
  FieldName: string;
}
const initialValues: FormValues = initialFarmDetails.Fields[0].Nutrients[0];

const CalculateNutrientsComponent: FC<InputModuleProps> = ({
  farmDetails,
  fertilizersDetails,
  updateFarmDetails,
  handleFormState,
}) => {
  const [selectedFieldIndex, setFieldIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [cropBalances, setCropBalance] = useState<MainBalanceInterface[]>(initialBalance);
  const [resultBalance, setResultBalance] = useState<MainBalanceInterface>(initialBalance[0]);
  const [fertBalance, setFertBalance] = useState<AgronomicBalanceInterface>(
    initialBalance[0].agronomic,
  );
  const fieldsOption: OptionInterface[] = farmDetails.Fields.map((field) => ({
    value: field.FieldName,
    label: field.FieldName,
  }));

  const fertilizerOption: OptionInterface[] = fertilizersDetails.map((fertilizer) => ({
    value: fertilizer.fertilizerId,
    label:
      DryFertilizerOptions.find(
        (option) => option.value === fertilizer.fertilizerId,
      )?.label.toString() ?? fertilizer.fertilizerId,
  }));

  const isLiquid = fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Liquid');

  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().required('Required'),
    fertilizerId: Yup.string().required('Required'),
    applRate: Yup.number().positive().required('Required'),
    applUnitId: Yup.string().required('Required'),
    liquidDensity: Yup.number().when([], () =>
      isLiquid
        ? Yup.number().required('Required').positive('Liquid density must be a positive number')
        : Yup.number().notRequired(),
    ),
    liquidDensityUnitId: Yup.string().when([], () =>
      isLiquid ? Yup.string().required('Required') : Yup.string().notRequired(),
    ),
  });

  const sumBalances = (balances: MainBalanceInterface[]): MainBalanceInterface =>
    balances.reduce(
      (acc, balance) => ({
        agronomic: {
          N: acc.agronomic.N + balance.agronomic.N,
          P: acc.agronomic.P + balance.agronomic.P,
          K: acc.agronomic.K + balance.agronomic.K,
        },
        cropRemoval: {
          N: (acc.cropRemoval.N || 0) + (balance.cropRemoval.N || 0),
          P: acc.cropRemoval.P + balance.cropRemoval.P,
          K: acc.cropRemoval.K + balance.cropRemoval.K,
        },
      }),
      {
        agronomic: { N: 0, P: 0, K: 0 },
        cropRemoval: { N: 0, P: 0, K: 0 },
      },
    );

  const calcFieldBalances = (field: FieldDetailInterface) => {
    if (field) {
      const balances = field.Crops.map((crop) => Calculate(field, crop));
      setCropBalance(balances);

      let fertN = 0;
      let fertP = 0;
      let fertK = 0;

      if (field.Nutrients?.nutrientFertilizers?.length > 0) {
        field.Nutrients.nutrientFertilizers.forEach((fertilizer) => {
          fertN += fertilizer.fertN;
          fertP += fertilizer.fertP2o5;
          fertK += fertilizer.fertK2o;
        });
      }

      let newResultBalance = sumBalances(balances);

      newResultBalance = {
        agronomic: {
          N: newResultBalance.agronomic.N + fertN,
          P: newResultBalance.agronomic.P + fertP,
          K: newResultBalance.agronomic.K + fertK,
        },
        cropRemoval: {
          N: newResultBalance.cropRemoval.N ? newResultBalance.cropRemoval.N + fertN : fertN,
          P: newResultBalance.cropRemoval.P + fertP,
          K: newResultBalance.cropRemoval.K + fertK,
        },
      };

      setResultBalance(newResultBalance);
    }
  };

  useEffect(() => {
    if (selectedFieldIndex !== -1) {
      calcFieldBalances(farmDetails.Fields[selectedFieldIndex]);
    }
    // Adding calcFieldBalances to the dependencies causes an infinite loop,
    // ESLint has a rule that requires it to be included, but not sure how to fix it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFieldIndex, farmDetails]);

  const submitCalculationData = (values: FertilizerInterface & { FieldName: string }): void => {
    setTimeout(() => {
      // Destructure to exclude FieldName
      // I want to remove FieldName from values, which is needed in initialValues
      // for form validation
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { FieldName, ...fertValues } = values;

      const newFertilizer: FertilizerInterface = {
        ...fertValues,
        id: fertilizersDetails[selectedIndex].id,
        fertilizerTypeId: fertilizersDetails[selectedIndex].fertilizerTypeId,
        fertilizerId: fertilizersDetails[selectedIndex].fertilizerId,
        customN: fertBalance.N,
        customP2o5: fertBalance.P,
        customK2o: fertBalance.K,
        fertN: fertBalance.N,
        fertP2o5: fertBalance.P,
        fertK2o: fertBalance.K,
      };

      const newFarmDetails = { ...farmDetails };

      // Check is ferts array is null and initilize it if it is
      const emptyFertsArr: FertilizerInterface[] = [];
      newFarmDetails.Fields[selectedFieldIndex].Nutrients.nutrientFertilizers =
        newFarmDetails.Fields[selectedFieldIndex].Nutrients?.nutrientFertilizers ?? emptyFertsArr;

      newFarmDetails.Fields[selectedFieldIndex].Nutrients?.nutrientFertilizers?.push(newFertilizer);

      calcFieldBalances(newFarmDetails.Fields[selectedFieldIndex]);
      updateFarmDetails(newFarmDetails);
    });
  };

  const handleFieldChange = (event: ChangeEvent<HTMLSelectElement>, setFieldValue: Function) => {
    const newIndex = fieldsOption.findIndex((option) => option.value === event.target.value);
    setFieldValue(event.target.name, event.target.value);
    setFieldIndex(newIndex);
  };

  // Refer to the link below for the BC conversion chart used for the unit conversions
  // https://www2.gov.bc.ca/assets/gov/farming-natural-resources-and-industry/agriculture-and-seafood/agriservicebc/production-guides/berries/metric_tables_2012.pdf
  const calcFertBalance = (
    fert: FertilizerInterface,
    applRate: number,
    applUnit: string,
    density?: number,
    densityUnits?: string,
  ): AgronomicBalanceInterface => {
    let newFertBalance: AgronomicBalanceInterface = initialAgronomicBalance;
    let convertedApplRate = applRate;
    let convertedDensity = density || 1;

    if (!fert) return newFertBalance;

    // Default unit for calc is lb/ac for dry ferts, imp. gall/ac for liquid
    // this will check for units and adjust accordingly
    switch (applUnit) {
      case 'kg/ha':
        convertedApplRate *= ConversionCoeficient.KgHa_LbAc;
        break;
      case 'lb/1000ft2':
        convertedApplRate *= ConversionCoeficient.Ac_SqrFt;
        break;
      case 'L/ac':
        convertedApplRate *= ConversionCoeficient.L_ImpGall;
        break;
      case 'US gallons/ac':
        convertedApplRate *= ConversionCoeficient.USGall_ImpGall;
        break;
      default:
        break;
    }

    // Default density unit is lb/imp. gall
    // This checks and adjust if necessary
    if (fert.fertilizerTypeId.includes('Liquid Fertilizer')) {
      switch (densityUnits) {
        case 'kg/US Gallon':
          // kg to lb
          convertedDensity *= ConversionCoeficient.Kg_Lb;
          // Freedom units to Imperial
          convertedDensity /= ConversionCoeficient.USGall_ImpGall;
          break;
        case 'kg/L':
          convertedDensity *= ConversionCoeficient.Kg_Lb;
          convertedDensity /= ConversionCoeficient.L_ImpGall;
          break;
        case 'lb/US gallon':
          convertedDensity /= ConversionCoeficient.USGall_ImpGall;
          break;
        default:
          break;
      }

      convertedApplRate *= convertedDensity;
    }

    newFertBalance = {
      // Fert NPK are percentages, make it so before multiplication
      N: Math.round((fert.fertN / 100) * convertedApplRate),
      P: Math.round((fert.fertP2o5 / 100) * convertedApplRate),
      K: Math.round((fert.fertK2o / 100) * convertedApplRate),
    };

    return newFertBalance;
  };

  const handleFertilizerChange = (
    event: ChangeEvent<HTMLSelectElement>,
    setFieldValue: Function,
  ) => {
    const newIndex = fertilizerOption.findIndex((option) => option.value === event.target.value);
    setFieldValue(event.target.name, event.target.value);
    setSelectedIndex(newIndex);
  };

  const displayFertilizerOption = (): OptionInterface[] => {
    if (fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Dry Fertilizer')) {
      return DryApplicationUnits;
    }
    if (fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Liquid Fertilizer')) {
      return LiquidApplicationUnits;
    }
    return [];
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitCalculationData}
        validate={(values) => {
          StatusValidate(validationSchema, values, handleFormState, CALCULATION_INFORMATION);
          setFertBalance(
            calcFertBalance(
              fertilizersDetails[selectedIndex],
              values.applRate,
              values.applUnitId,
              values.liquidDensity || undefined,
              values.liquidDensityUnitId || undefined,
            ),
          );
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <StyledFieldContainer>
              <StyledFieldSelect>
                <CustomSelect
                  label="Field"
                  id="FieldName"
                  name="FieldName"
                  options={fieldsOption}
                  width="100%"
                  formCalc
                  onChange={(e) => {
                    handleFieldChange(e, setFieldValue);
                  }}
                />
              </StyledFieldSelect>
              <StyledDivider />

              <StyledGroupFormView>
                <StyledLeftView>
                  <CustomSelect
                    label="Fertilizer"
                    id="fertilizerId"
                    name="fertilizerId"
                    options={fertilizerOption}
                    width="100%"
                    formCalc
                    onChange={(e) => handleFertilizerChange(e, setFieldValue)}
                  />

                  <StyledSmallFormGroup>
                    <CustomField
                      label="Application Rate"
                      name="applRate"
                      id="applRate"
                      type="number"
                      width="50%"
                    />
                    <CustomSelect
                      label="Units"
                      name="applUnitId"
                      id="applUnitId"
                      options={displayFertilizerOption()}
                      width="50%"
                      formCalc
                      onChange={(e) => handleChange(e, setFieldValue)}
                    />
                  </StyledSmallFormGroup>

                  {fertilizersDetails[selectedIndex]?.fertilizerTypeId.includes('Liquid') && (
                    <StyledSmallFormGroup>
                      <CustomField
                        label="Density"
                        name="liquidDensity"
                        id="liquidDensity"
                        type="number"
                        width="50%"
                      />
                      <CustomSelect
                        label="Density Units"
                        id="liquidDensityUnitId"
                        name="liquidDensityUnitId"
                        options={DensityUnits}
                        width="50%"
                        formCalc
                        onChange={(e) => handleChange(e, setFieldValue)}
                      />
                    </StyledSmallFormGroup>
                  )}

                  <StyledSmallFormGroup>
                    <CustomSelect
                      label="Method (optional)"
                      id="applMethodId"
                      name="applMethodId"
                      options={ApplicationMethod}
                      width="50%"
                      formCalc
                      onChange={(e) => handleChange(e, setFieldValue)}
                    />
                    <CustomField
                      label="Date (optional)"
                      name="applDate"
                      id="applDate"
                      type="text"
                      width="50%"
                    />
                  </StyledSmallFormGroup>
                </StyledLeftView>

                <StyledRightView>
                  <h3>Available Nutrients (lb/ac)</h3>
                  <RightListGroup>
                    <RightListItem>
                      <h4>N</h4>
                      <p>{fertBalance.N}</p>
                    </RightListItem>
                    <RightListItem>
                      <h4>P2O5</h4>
                      <p>{fertBalance.P}</p>
                    </RightListItem>
                    <RightListItem>
                      <h4>k2O</h4>
                      <p>{fertBalance.K}</p>
                    </RightListItem>
                  </RightListGroup>
                  <StyledButtonContainer formCalc>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={false}
                      text={ComponentText.ADD_FERTILIZERS}
                    />
                  </StyledButtonContainer>
                </StyledRightView>
              </StyledGroupFormView>
              <StyledDivider />

              {farmDetails.Fields[selectedFieldIndex] &&
                farmDetails.Fields[selectedFieldIndex].Crops && (
                  <CalculationList
                    field={farmDetails.Fields[selectedFieldIndex]}
                    cropBalances={cropBalances}
                    resultBalance={resultBalance}
                  />
                )}
            </StyledFieldContainer>
          </Form>
        )}
      </Formik>
      <CalculationButtonGroup handleFormState={handleFormState} />
    </>
  );
};

const Calculation: InputModuleInterface = {
  InputModuleComponent: CalculateNutrientsComponent,
  id: CALCULATION_INFORMATION,
  name: { long: 'Calculation', short: 'Calculation' },
  faIcon: faCalculator,
  status: 'inactive',
  enable: false,
};

export default Calculation;
