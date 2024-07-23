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

  NYieldRanges.forEach((range) => {
    if (
      (range.min === undefined || yieldValue >= range.min) &&
      (range.max === undefined || yieldValue < range.max)
    ) {
      N += range.addition;
    }
  });

  return N;
}

function calcPK(calcLogic: CalcLogic, soilTest: number, leafTissue: number): number {
  let val = 0;

  if (!calcLogic.soilTestRanges) {
    console.error('Missing details in calculationTable/agronomicBalance/soilTestRanges');
    return 0;
  }

  calcLogic.soilTestRanges.forEach((range) => {
    if (
      (range.min === undefined || soilTest >= range.min) &&
      (range.max === undefined || soilTest < range.max)
    ) {
      if (range.leafTissueRanges)
        range.leafTissueRanges.forEach((leafRange) => {
          if (
            (leafRange.min === undefined || leafTissue >= leafRange.min) &&
            (leafRange.max === undefined || leafTissue < leafRange.max)
          ) {
            if (leafRange.addition) val += leafRange.addition;
          }
        });
    }
  });

  return val;
}

function calcRemovalPK(rmCoeficients: CalcLogic, cropYield: number, isPruned?: boolean) {
  if (!rmCoeficients.pruningRemovalFactor || !rmCoeficients.fruitRemovalFactor) {
    console.error('Missing details in calculationTable/cropsRemovalBalance/pruningRemovalFactor');
    return 0;
  }

  console.log(
    `pruningRemovalFactor: ${rmCoeficients.pruningRemovalFactor},
    fruitRemovalFactor: ${rmCoeficients.fruitRemovalFactor},
    cropYield: ${cropYield},
    isPruned: ${isPruned}`,
  );

  let val = 0;
  if (isPruned === true) {
    val += cropYield * rmCoeficients.pruningRemovalFactor;
    console.log(cropYield + ' ' + rmCoeficients.pruningRemovalFactor);
    console.log('isPruned: ', cropYield * rmCoeficients.pruningRemovalFactor);
  }

  val += cropYield * rmCoeficients.fruitRemovalFactor;
  console.log(cropYield + ' ' + rmCoeficients.fruitRemovalFactor);
  console.log('fruitRemovalFactor: ', cropYield * rmCoeficients.fruitRemovalFactor);

  return val;
}

interface AgronomicBalance {
  N?: number;
  P?: number;
  K?: number;
}

interface CropRemovalBalance {
  P?: number;
  K?: number;
}

function Calculate(field: FieldDetailInterface) {
  const crop = field.Crops[0];
  const calcTable: CalculationTable = calcData;
  const agronomicBalance: AgronomicBalance = { N: 0, P: 0, K: 0 };
  const cropRemovalBalance: CropRemovalBalance = { P: 0, K: 0 };

  agronomicBalance.N = calcN(
    calcTable.agronomicBalance.nitrogenCalculation.logic,
    crop.yield,
    crop.willSawdustBeApplied,
  );

  agronomicBalance.P = calcPK(
    calcTable.agronomicBalance.phosphorusCalculation.logic,
    field.SoilTest.ValP,
    field.LeafTest.leafTissueP,
  );

  agronomicBalance.K = calcPK(
    calcTable.agronomicBalance.potassiumCalculation.logic,
    field.SoilTest.valK,
    field.LeafTest.leafTissueK,
  );

  cropRemovalBalance.P = calcRemovalPK(
    calcTable.cropRemovalBalance.phosphorusRemoval.logic,
    field.Crops[0].yield,
    field.Crops[0].willPlantsBePruned,
  );

  cropRemovalBalance.K = calcRemovalPK(
    calcTable.cropRemovalBalance.potassiumRemoval.logic,
    field.Crops[0].yield,
    field.Crops[0].willPlantsBePruned,
  );

  // console.log(agronomicBalance);
  console.log(cropRemovalBalance);
}

export default Calculate;
