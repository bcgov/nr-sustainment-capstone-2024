import CropsDetailsInterface from 'src/Interface/CropsDetailsInterface';
import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';

const emptyFieldDetails: FieldDetailInterface = {
  Id: 0,
  FieldName: '',
  Area: 0,
  Comment: '',
  hasSoilTest: null,
  hasLeafTest: null,
  SoilTest: { TestingMethod: '', sampleDate: '', valNO3H: 0, valP: 0, valK: 0, valPH: 0 },
  LeafTest: { leafTissueP: 0, leafTissueK: 0 },
  Crops: [
    {
      id: 0,
      cropId: '',
      yield: 0,
      plantAgeYears: '',
      numberOfPlantsPerAcre: 0,
      distanceBtwnPlantsRows: '',
      willPlantsBePruned: null,
      whereWillPruningsGo: '',
      willSawdustBeApplied: null,
    },
  ],
};

const emptyCropsDetails: CropsDetailsInterface = {
  id: 0,
  cropId: '',
  yield: 0,
  plantAgeYears: '',
  numberOfPlantsPerAcre: 0,
  distanceBtwnPlantsRows: '',
  willPlantsBePruned: null,
  whereWillPruningsGo: '',
  willSawdustBeApplied: null,
};

export { emptyFieldDetails, emptyCropsDetails };
