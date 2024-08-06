import CalculationTable, { CalcLogic } from '@Interface/CalculationTableInterface';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import AgronomicBalanceInterface from '@Interface/AgronomicBalanceInterface';
import CropRemovalBalanceInterface from '@Interface/CropRemovalBalance';
import MainBalanceInterface from '@Interface/MainBalanceInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import * as raspberryTable from './calculation-data/raspberryCalculation.json';
import * as blueberryTable from './calculation-data/blueberryCalculation.json';

function calcN(
  calcLogic: CalcLogic,
  yieldValue: number,
  sawdust?: boolean,
  isRaspberry?: boolean,
  plantAge?: number,
  plantDensity?: number,
): number {
  const { sawdustAddition } = calcLogic;
  const NYieldRanges = calcLogic.yieldRanges;
  let N = 0;

  if (!sawdustAddition || !NYieldRanges) {
    console.error('Missing details in calculationTable/agronomicBalance/sawdustAddition');
    return 0;
  }

  if (!isRaspberry && plantAge && plantDensity) {
    NYieldRanges.forEach((range) => {
      if (
        (range.min === undefined || plantAge >= range.min) &&
        (range.max === undefined || plantAge < range.max)
      ) {
        N += (range.addition * plantDensity) / 1000 / 1.12;
      }
    });
  } else {
    NYieldRanges.forEach((range) => {
      if (
        (range.min === undefined || yieldValue >= range.min) &&
        (range.max === undefined || yieldValue < range.max)
      ) {
        N += range.addition;
      }
    });
  }

  if (sawdust) {
    N += sawdustAddition;
  }

  return Math.round(N * -1);
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

  return val * -1;
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

  return Math.round(val * -1);
}

// This function will be updated in the next ticket
// It is mostly a proof of correct calculations being applied
// For this reason, it is scoped to the first field first crop only at this point
function Calculate(field: FieldDetailInterface, crop: CropsDetailsInterface) {
  const agronomicBalance: AgronomicBalanceInterface = { N: 0, P: 0, K: 0 };
  const cropRemovalBalance: CropRemovalBalanceInterface = { P: 0, K: 0 };
  const isRemovedFromField = crop.whereWillPruningsGo === 'Removed from field';
  // Raspberry id is 76 is NMP
  const isRaspberry = crop.id === 76;
  const calcTable: CalculationTable = isRaspberry ? raspberryTable : blueberryTable;

  agronomicBalance.N = calcN(
    calcTable.agronomicBalance.nitrogenCalculation.logic,
    crop.yield,
    crop.willSawdustBeApplied,
    isRaspberry,
    parseInt(crop.plantAgeYears, 10) ?? undefined,
    crop.numberOfPlantsPerAcre ?? undefined,
  );

  agronomicBalance.P = calcPK(
    calcTable.agronomicBalance.phosphorusCalculation.logic,
    field.SoilTest?.ValP,
    field.LeafTest?.leafTissueP,
  );

  agronomicBalance.K = calcPK(
    calcTable.agronomicBalance.potassiumCalculation.logic,
    field.SoilTest?.valK,
    field.LeafTest?.leafTissueK,
  );

  cropRemovalBalance.P = calcRemovalPK(
    calcTable.cropRemovalBalance.phosphorusRemoval.logic,
    crop.yield,
    crop.willPlantsBePruned && isRemovedFromField,
  );

  cropRemovalBalance.K = calcRemovalPK(
    calcTable.cropRemovalBalance.potassiumRemoval.logic,
    crop.yield,
    crop.willPlantsBePruned && isRemovedFromField,
  );

  const mainBalance: MainBalanceInterface = {
    agronomic: agronomicBalance,
    cropRemoval: cropRemovalBalance,
  };
  return mainBalance;
}

export default Calculate;
