// Initial Values for calculation, some defaults are being used
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';

const initialFarmDetails: FarmDetailsInterface = {
  Year: '',
  FarmName: '',
  FarmRegion: '',
  HasBerries: true,
  Fields: [
    {
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
    },
  ],
};

export default initialFarmDetails;
