import FarmDetailsInterface from '@Interface/FarmDetailsInterface';
import NmpInterface from '@Interface/NmpInterface';
import NmpFieldInterface from '@Interface/NmpFieldInterface';
import { templateCropNMP, templateFieldNMP } from '@Constants/templateNMP';
import FieldDetailInterface from '@Interface/FieldDetailsInterface';
import NmpCropInterface from '@Interface/NmpCropInterface';
import CropsDetailsInterface from '@Interface/CropsDetailsInterface';
import FertilizerInterface from '@Interface/FertilizerInterface';

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
      id: crop.id,
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
      Id: field.Id,
      Area: field.Area,
      Comment: field.Comment || templateFieldNMP.Comment,
      FieldName: field.FieldName,
      HasSoilTest: field.HasSoilTest || templateFieldNMP.HasSoilTest,
      SoilTest: {
        ...templateFieldNMP.SoilTest,
        valNO3H: field.SoilTest?.valNO3H || templateFieldNMP.SoilTest.valNO3H,
        ValP: field.SoilTest?.ValP || templateFieldNMP.SoilTest.ValP,
        valK: field.SoilTest?.valK || templateFieldNMP.SoilTest.valK,
        valPH: field.SoilTest?.valPH || templateFieldNMP.SoilTest.valPH,
      },
      LeafTest: {
        leafTissueP: field.LeafTest?.leafTissueP || templateFieldNMP.LeafTest.leafTissueP,
        leafTissueK: field.LeafTest?.leafTissueK || templateFieldNMP.LeafTest.leafTissueK,
      },
      Crops: newCrops,
      Nutrients: newNutrients,
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
