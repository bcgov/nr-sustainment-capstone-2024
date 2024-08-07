import OptionInterface from 'src/Interface/OptionInterface';

const CropIDOptions: OptionInterface[] = [
  {
    value: '75',
    label: 'Blueberry',
  },
  {
    value: '76',
    label: 'Raspberry',
  },
];

const PlantAgeOptions: OptionInterface[] = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '9',
    label: '9 or more',
  },
];

const PlantsPerAcreOptions: OptionInterface[] = [
  {
    value: '2498',
    label: '2498',
  },
  {
    value: '2248',
    label: '2248',
  },
  {
    value: '1999',
    label: '1999',
  },
  {
    value: '1799',
    label: '1799',
  },
  {
    value: '1665',
    label: '1665',
  },
  {
    value: '1499',
    label: '1499',
  },
];

const DistanceBtwnPlants: OptionInterface[] = [
  {
    value: '0.6',
    label: '0.6 m (2 ft)',
  },
  {
    value: '0.75',
    label: '0.75 m (2.5 ft)',
  },
  {
    value: '0.9',
    label: '0.9 m (3 ft)',
  },
];

const DistanceBtwnRows: OptionInterface[] = [
  {
    value: '2.7',
    label: '2.7 m (9 ft)',
  },
  {
    value: '3.0',
    label: '3.0 m (10 ft)',
  },
];

const YesOrNo: OptionInterface[] = [
  {
    value: 'true',
    label: 'Yes',
  },
  {
    value: 'false',
    label: 'No',
  },
];

const WherePruningsGo: OptionInterface[] = [
  {
    value: 'N/A',
    label: 'N/A',
  },
  {
    value: 'Removed from field',
    label: 'Removed from field',
  },
  {
    value: 'Left in row',
    label: 'Left in row',
  },
  {
    value: 'Left between rows',
    label: 'Left between rows',
  },
];
export {
  CropIDOptions,
  PlantAgeOptions,
  PlantsPerAcreOptions,
  DistanceBtwnPlants,
  DistanceBtwnRows,
  YesOrNo,
  WherePruningsGo,
};
