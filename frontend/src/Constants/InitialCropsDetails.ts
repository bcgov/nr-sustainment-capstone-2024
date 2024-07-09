/**
 * @desc    This is only for crops to incorporate with the existing nmp workflow.
 * @author  @Kcaparas
 */

import { SubmissionCropsInterface } from 'src/Interface/CropsDetailsInterface';

const CropsInitialDetails: SubmissionCropsInterface = {
  id: 0,
  cropId: '',
  yield: 0,
  plantAgeYears: '',
  numberOfPlantsPerAcre: 0,
  distanceBtwnPlants: '',
  distanceBtwnRows: '',
  willPlantsBePruned: null,
  whereWillPruningsGo: '',
  willSawdustBeApplied: null,
};

export default CropsInitialDetails;
