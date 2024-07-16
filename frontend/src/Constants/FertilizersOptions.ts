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

export { FertilizerTypeOptions, DryFertilizerOptions, LiquidFertilizerOptions };
