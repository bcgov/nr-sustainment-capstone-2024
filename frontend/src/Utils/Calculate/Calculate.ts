import CalculationTable, { CalcLogic } from '@Interface/CalculationTableInterface';
import * as calcData from './calculation-data/raspberry_calculation.json';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';

function calcN(calcLogic: CalcLogic, yieldValue: number, sawdust?: boolean): number {
  const sawdust_addition = calcLogic.sawdust_addition;
  const N_yield_ranges = calcLogic.yield_ranges;
  let N = 0;

  if (!sawdust_addition || !N_yield_ranges) {
    console.error(
      'Missing details in calculation_table/agronomic_balance/sawdust_addition || N_yield_ranges',
    );
    return 0;
  }

  if (sawdust) {
    N += sawdust_addition;
  }

  for (const range of N_yield_ranges) {
    if (
      (range.min === undefined || yieldValue >= range.min) &&
      (range.max === undefined || yieldValue < range.max)
    ) {
      N += range.addition;
      break;
    }
  }

  return N;
}

function calcPK(calcLogic: CalcLogic, soilTest: number, leafTissue: number): number {
  let val = 0;

  if (!calcLogic.soil_test_ranges) {
    console.error('Missing details in calculation_table/agronomic_balance/soil_test_ranges');
    return 0;
  }

  for (const range of calcLogic.soil_test_ranges) {
    if (
      (range.min === undefined || soilTest >= range.min) &&
      (range.max === undefined || soilTest < range.max)
    ) {
      if (range.leaf_tissue_ranges)
        for (const leafRange of range.leaf_tissue_ranges) {
          if (
            (leafRange.min === undefined || leafTissue >= leafRange.min) &&
            (leafRange.max === undefined || leafTissue < leafRange.max)
          ) {
            if (leafRange.addition) val += leafRange.addition;
            break;
          }
        }
      break;
    }
  }

  return val;
}

function Calculate(field: FieldDetailInterface) {
  const crop = field.Crops[0];
  const calcTable: CalculationTable = calcData;

  const N = calcN(
    calcTable.agronomic_balance.nitrogen_calculation.logic,
    crop.yield,
    crop.willSawdustBeApplied,
  );

  const P = calcPK(
    calcTable.agronomic_balance.phosphorus_calculation.logic,
    field.SoilTest.ValP,
    field.LeafTest.leafTissueP,
  );

  const K = calcPK(
    calcTable.agronomic_balance.potassium_calculation.logic,
    field.SoilTest.valK,
    field.LeafTest.leafTissueK,
  );

  // console.log('Yield: ', crop.yield);
  // console.log('Sawdust: ', crop.willSawdustBeApplied);
  console.log('Nitrogen:', N);

  // console.log('soilTestP: ', field.SoilTest.ValP);
  // console.log('leafTissueP: ', field.LeafTest.leafTissueP);
  console.log('Phosphorus: ', P);
  console.log('Potassium: ', K);

  console.log(calcData);
}

export default Calculate;
