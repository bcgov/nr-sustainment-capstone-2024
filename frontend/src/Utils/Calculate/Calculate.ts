import CalculationTable, { CalcLogic } from '@Interface/CalculationTableInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import * as calcData from './calculation-data/raspberryCalculation.json';

function calcN(calcLogic: CalcLogic, yieldValue: number, sawdust?: boolean): number {
  const { sawdustAddition } = calcLogic;
  const NYieldRanges = calcLogic.yieldRanges;
  let N = 0;

  if (!sawdustAddition || !NYieldRanges) {
    console.error(
      'Missing details in calculationTable/agronomicBalance/sawdustAddition || NYieldRanges',
    );
    return 0;
  }

  if (sawdust) {
    N += sawdustAddition;
  }

  for (const range of NYieldRanges) {
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

  if (!calcLogic.soilTestRanges) {
    console.error('Missing details in calculationTable/agronomicBalance/soilTestRanges');
    return 0;
  }

  for (const range of calcLogic.soilTestRanges) {
    if (
      (range.min === undefined || soilTest >= range.min) &&
      (range.max === undefined || soilTest < range.max)
    ) {
      if (range.leafTissueRanges)
        for (const leafRange of range.leafTissueRanges) {
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
    calcTable.agronomicBalance.nitrogenCalculation.logic,
    crop.yield,
    crop.willSawdustBeApplied,
  );

  const P = calcPK(
    calcTable.agronomicBalance.phosphorusCalculation.logic,
    field.SoilTest.ValP,
    field.LeafTest.leafTissueP,
  );

  const K = calcPK(
    calcTable.agronomicBalance.potassiumCalculation.logic,
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
