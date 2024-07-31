import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import NmpInterface from '@Interface/NmpInterface';
import NmpFieldInterface from '@Interface/NmpFieldInterface';
import { templateCropNMP, templateFieldNMP, templateNutrientsNMP } from '@Constants/templateNMP';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import NmpCropInterface from '@Interface/NmpCropInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import FertilizerInterface from '@Interface/FertilizerInterface';
import {
  ApplicationMethod,
  DensityUnits,
  DryApplicationUnits,
  DryFertilizerOptions,
  FertilizerTypeOptions,
  LiquidApplicationUnits,
  LiquidFertilizerOptions,
} from '@Constants/FertilizersOptions';
import OptionInterface from '@Interface/OptionInterface';
import NmpFertilizerInterface from '@Interface/NmpFertilizerInterface';

function getOptionIndex(options: OptionInterface[], val: string): number {
  return options.findIndex((option) => option.value === val) + 1;
}

/**
 * @desc    Convert the FarmDetailsInterface to the NmpInterface structure.
 * @param   newDetails: FarmDetailsInterface => Our main data object in our own data structure
 * @param   prevDetails: NmpInterface => Previous NMP data from local storage
 * @return  Updated NmpInterface with the new details
 */
const convertToNMP = (
  newDetails: FarmDetailsInterface,
  prevDetails: NmpInterface,
): NmpInterface => {
  const newFields: NmpFieldInterface[] = newDetails.Fields.map((field: FieldDetailInterface) => {
    const newCrops: NmpCropInterface[] = field.Crops.map((crop: CropsDetailsInterface) => ({
      ...templateCropNMP,
      id: crop.id + 1,
      cropId: crop.cropId,
      yield: crop.yield,
      plantAgeYears: crop.plantAgeYears,
      numberOfPlantsPerAcre: crop.numberOfPlantsPerAcre,
      distanceBtwnPlantsRows: crop.distanceBtwnPlantsRows,
      willPlantsBePruned: crop.willPlantsBePruned || templateCropNMP.willPlantsBePruned,
      whereWillPruningsGo: crop.whereWillPruningsGo,
      willSawdustBeApplied: crop.willSawdustBeApplied || templateCropNMP.willSawdustBeApplied,
    }));

    const newNutrients: FertilizerInterface[] = field.Nutrients;

    return {
      ...templateFieldNMP,
      Id: field.Id + 1,
      Area: field.Area,
      Comment: field.Comment || templateFieldNMP.Comment,
      FieldName: field.FieldName,
      HasSoilTest: field.HasSoilTest,
      SoilTest: field.HasSoilTest
        ? {
            ...templateFieldNMP.SoilTest,
            valNO3H: field.SoilTest.valNO3H || templateFieldNMP.SoilTest?.valNO3H,
            ValP: field.SoilTest.ValP || templateFieldNMP.SoilTest?.valNO3H,
            valK: field.SoilTest.valK || templateFieldNMP.SoilTest?.valK,
            valPH: field.SoilTest.valPH || templateFieldNMP.SoilTest?.valPH,
            // sampleDate: field.SoilTest?.sampleDate || templateFieldNMP.SoilTest?.sampleDate,
            sampleDate: '2024-07-01T00:00:00',
          }
        : null,
      LeafTest: field.HasLeafTest
        ? {
            leafTissueP: field.LeafTest?.leafTissueP,
            leafTissueK: field.LeafTest?.leafTissueK,
          }
        : null,
      Crops: newCrops,

      HasNutrients: field.Nutrients && field.Nutrients.length >= 0,
      Nutrients: {
        nutrientManures: [],
        nutrientFertilizers: field.Nutrients
          ? newNutrients.map((nutrient: FertilizerInterface): NmpFertilizerInterface => {
              const isFertDry =
                getOptionIndex(FertilizerTypeOptions, nutrient.fertilizerTypeId) <= 1;
              return {
                id: nutrient.id + 1,
                fertilizerTypeId: getOptionIndex(FertilizerTypeOptions, nutrient.fertilizerTypeId),
                fertilizerId: isFertDry
                  ? getOptionIndex(DryFertilizerOptions, nutrient.fertilizerId)
                  : getOptionIndex(LiquidFertilizerOptions, nutrient.fertilizerId),
                applRate: nutrient.applRate,
                applUnitId: isFertDry
                  ? getOptionIndex(DryApplicationUnits, nutrient.applUnitId)
                  : getOptionIndex(LiquidApplicationUnits, nutrient.applUnitId),
                applDate: nutrient.applDate || null,
                applMethodId: getOptionIndex(ApplicationMethod, nutrient.applMethodId),
                customN: nutrient.customN || null,
                customP2o5: nutrient.customP2o5 || null,
                customK2o: nutrient.customK2o || null,
                fertN: nutrient.fertN,
                fertP2o5: nutrient.fertP2o5,
                fertK2o: nutrient.fertK2o,
                liquidDensity: nutrient.liquidDensity
                  ? nutrient.liquidDensity
                  : templateNutrientsNMP.liquidDensity,
                liquidDensityUnitId: getOptionIndex(DensityUnits, nutrient.liquidDensityUnitId),
              };
            })
          : null,
        nutrientOthers: [],
      },
    };
  });

  return {
    ...prevDetails,
    farmDetails: {
      ...prevDetails.farmDetails,
      FarmName: newDetails.FarmName,
      Year: newDetails.Year,
    },
    years: [{ ...prevDetails.years[0], Year: newDetails.Year, Fields: newFields }],
  };
};

export default convertToNMP;
