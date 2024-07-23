import CalculationTable, { CalcLogic } from '@Interface/CalculationTableInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import * as calcData from './calculation-data/raspberryCalculation.json';
import AgronomicBalanceInterface from '@Interface/AgronomicBalanceInterface';
import CropRemovalBalanceInterface from '@Interface/CropRemovalBalance';

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

  let val = 0;
  if (isPruned === true) {
    val += rmCoeficients.pruningRemovalFactor;
  }

  val += cropYield * rmCoeficients.fruitRemovalFactor;

  return val;
}

// This function will be updated in the next ticket
// It is mostly a proof of correct calculations being applied
// For this reason, it is scoped to the first field first crop only at this point
function Calculate(field: FieldDetailInterface) {
  const crop = field.Crops[0];
  const calcTable: CalculationTable = calcData;
  const agronomicBalance: AgronomicBalanceInterface = { N: 0, P: 0, K: 0 };
  const cropRemovalBalance: CropRemovalBalanceInterface = { P: 0, K: 0 };
  const isRemovedFromField = field.Crops[0].whereWillPruningsGo === 'Removed from field';
  console.log(field.Crops[0].whereWillPruningsGo);

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
    field.Crops[0].willPlantsBePruned && isRemovedFromField,
  );

  cropRemovalBalance.K = calcRemovalPK(
    calcTable.cropRemovalBalance.potassiumRemoval.logic,
    field.Crops[0].yield,
    field.Crops[0].willPlantsBePruned && isRemovedFromField,
  );

  // Leaving it for now, will be removed when implementing Calculate Nutrients fuctionality
  console.log('AgronomicBalance: ', agronomicBalance);
  console.log('CropRemovalBalance: ', cropRemovalBalance);
}

export default Calculate;
