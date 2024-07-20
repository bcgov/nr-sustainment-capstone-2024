import OptionInterface from '@Interface/OptionInterface';

const FertilizerTypeOptions: OptionInterface[] = [
  {
    value: 'Dry Fertilizer',
    label: 'Dry Fertilizer',
  },
  {
    value: 'Dry Fertilizer (Custom)',
    label: 'Dry Fertilizer (Custom)',
  },
  {
    value: 'Liquid Fertilizer',
    label: 'Liquid Fertilizer',
  },
  {
    value: 'Liquid Fertilizer (Custom)',
    label: 'Liquid Fertilizer (Custom)',
  },
];

const DryFertilizerOptions: OptionInterface[] = [
  {
    value: 'Urea (46-0-0)',
    label: 'Urea (46-0-0)',
  },
  {
    value: '15-15-17',
    label: '15-15-17',
  },
];
const LiquidFertilizerOptions: OptionInterface[] = [
  {
    value: 'Ammonium polyphosphate (10-34-0)',
    label: 'Ammonium polyphosphate (10-34-0)',
  },
  {
    value: 'Liquid urea (23-0-0)',
    label: 'Liquid urea (23-0-0)',
  },
];

const DryApplicationUnits: OptionInterface[] = [
  {
    value: 'lb/ac',
    label: 'lb/ac',
  },
  {
    value: 'kg/ha',
    label: 'kg/ha',
  },
  {
    value: 'lb/1000ft2',
    label: 'lb/1000ft2',
  },
];

const LiquidApplicationUnits: OptionInterface[] = [
  {
    value: 'L/ac',
    label: 'L/ac',
  },
  {
    value: 'imp. gallons/ac',
    label: 'imp. gallons/ac',
  },
  {
    value: 'US gallons/ac',
    label: 'US gallons/ac',
  },
  {
    value: 'L/ha',
    label: 'L/ha',
  },
];

const ApplicationMethod: OptionInterface[] = [
  {
    value: 'Broadcast',
    label: 'Broadcast',
  },
  {
    value: 'Banded',
    label: 'Banded',
  },
  {
    value: 'With Planter',
    label: 'With Planter',
  },
  {
    value: 'Sidedress',
    label: 'Sidedress',
  },
  {
    value: 'Fertigation',
    label: 'Fertigation',
  },
  {
    value: 'Foliar',
    label: 'Foliar',
  },
];

const DensityUnits: OptionInterface[] = [
  {
    value: 'kg/US Gallon',
    label: 'kg/US Gallon',
  },
  {
    value: 'kg/L',
    label: 'kg/L',
  },
  {
    value: 'lb imp. gallon',
    label: 'lb imp. gallon',
  },
  {
    value: 'lb/US gallon',
    label: 'lb/US gallon',
  },
];
export {
  FertilizerTypeOptions,
  DryFertilizerOptions,
  LiquidFertilizerOptions,
  DryApplicationUnits,
  LiquidApplicationUnits,
  ApplicationMethod,
  DensityUnits,
};
