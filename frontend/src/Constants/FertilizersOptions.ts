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
    value: '1',
    label: 'Urea (46-0-0)',
  },
  {
    value: '35',
    label: '15-15-17',
  },
  {
    value: '33',
    label: '15-8-11',
  },
  {
    value: '41',
    label: '16-16-16',
  },
  {
    value: '34',
    label: '20-10-6',
  },
  {
    value: '36',
    label: '6-20-14',
  },
  {
    value: '37',
    label: '8-10-20',
  },
  {
    value: '31',
    label: '8-18-22',
  },
  {
    value: '32',
    label: '8-24-24',
  },
  {
    value: '6',
    label: 'Ammonium nitrate (34-0-0)',
  },
  {
    value: '28',
    label: 'Ammonium phosphate-sulfate (16-20-0)',
  },
  {
    value: '7',
    label: 'Ammonium sulphate (21-0-0-24S)',
  },
  {
    value: '17',
    label: 'Anhydrous ammonia (82-0-0)',
  },
  {
    value: '29',
    label: 'Calcium nitrate (15.5-0-0-18Ca)',
  },
  {
    value: '10',
    label: 'Diammonium phosphate (DAP, 18-46-0)',
  },
  {
    value: '14',
    label: 'Monoammonium phosphate (MAP, 11-52-0)',
  },
  {
    value: '15',
    label: 'Muriate of potash (0-0-62)',
  },
  {
    value: '16',
    label: 'Sulphate of potash (0-0-50-17S)',
  },
  {
    value: '30',
    label: 'Sulphur coated urea (40-0-0)',
  },
  {
    value: '2',
    label: '10-16-18',
  },
  {
    value: '3',
    label: '18-18-18',
  },
  {
    value: '4',
    label: '18-9-9',
  },
  {
    value: '5',
    label: '30-10-0-7S',
  },
  {
    value: '8',
    label: 'Blood meal (12-1-1)',
  },
  {
    value: '9',
    label: 'Bone meal (3-20-0)',
  },
  {
    value: '11',
    label: 'Feather meal (12-0-0)',
  },
  {
    value: '12',
    label: 'Fish meal (10-6-2)',
  },
  {
    value: '13',
    label: 'Greensand (0-1-6)',
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
