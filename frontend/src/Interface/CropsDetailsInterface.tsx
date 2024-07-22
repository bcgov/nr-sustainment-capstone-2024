/**
 * @summary     Interface for the main data file
 * @description This interface defines how the main data file should be structured,
 *              which values it takes and any calculation results. This can then
 *              be exported as JSON.
 * @author      @Kcaparas
 */

interface CropsDetailsInterface {
  id: number;
  cropId: string;
  yield: number;
  plantAgeYears: string;
  numberOfPlantsPerAcre: number;
  distanceBtwnPlantsRows: string;
  willPlantsBePruned: boolean | undefined;
  whereWillPruningsGo: string;
  willSawdustBeApplied: boolean | undefined;
}

export default CropsDetailsInterface;
