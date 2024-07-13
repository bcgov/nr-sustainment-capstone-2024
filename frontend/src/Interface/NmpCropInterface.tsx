/**
 * @summary     Interface nmp files
 * @desc        This interface describes the structure of an nmp
 *              Crop object
 * @author      @GDamaso
 */
interface NmpCropInterface {
  id: number;
  cropId: string;
  cropOther?: string | null;
  yield: number;
  reqN: number;
  stdN: number;
  reqP2o5: number;
  reqK2o: number;
  remN: number;
  remP2o5: number;
  remK2o: number;
  crudeProtien?: boolean | null;
  prevCropId: number;
  coverCropHarvested?: boolean | null;
  prevYearManureAppl_volCatCd: number;
  yieldHarvestUnit: number;
  yieldByHarvestUnit: number;
  plantAgeYears?: string | null;
  numberOfPlantsPerAcre: number;
  distanceBtwnPlantsRows?: string | null;
  willPlantsBePruned: boolean;
  whereWillPruningsGo: string;
  willSawdustBeApplied: boolean;
}

export default NmpCropInterface;
