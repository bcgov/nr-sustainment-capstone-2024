/**
 * @summary     Interface for the main data file
 * @description This interface defines how the main data file should be structured,
 *              which values it takes and any calculation results. This can then
 *              be exported as JSON.
 * @author      @Kcaparas
 */

interface CropsDetailsInterface {
    id: number,
    cropId: string,
    yield: number,
    plantAgeYears: string,
    numberOfPlantsPerAcre: number,
    distanceBtwnPlantsRows: string,
    willPlantsBePruned: boolean | null,
    whereWillPruningsGo: string,
    willSawdustBeApplied: boolean | null,
}

/**
 * @summary     Interface for the main data file
 * @description This interface will be for Submission, it works the same as the CropsDetailInterface
 *              but this is only for the submission of formik.
 * @author      @Kcaparas
 */

interface SubmissionCropsInterface {
    id: number,
    cropId: string,
    yield: number,
    plantAgeYears: string,
    numberOfPlantsPerAcre: number,
    distanceBtwnPlants: string,
    distanceBtwnRows: string,
    willPlantsBePruned: boolean | null,
    whereWillPruningsGo: string,
    willSawdustBeApplied: boolean | null,
}

export type { CropsDetailsInterface, SubmissionCropsInterface };
