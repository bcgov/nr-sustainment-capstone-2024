import NmpFertilizerInterface from '@Interface/NmpFertilizerInterface';
import NmpFieldInterface from '@Interface/NmpFieldInterface';

const templateNMP = {
  farmDetails: {
    Year: '',
    FarmName: '',
    FarmRegion: 21,
    FarmSubRegion: null,
    SoilTests: null,
    TestingMethod: '11',
    Manure: null,
    HasSelectedFarmType: true,
    ImportsManureCompost: true,
    HasAnimals: false,
    HasDairyCows: false,
    HasBeefCows: false,
    HasPoultry: false,
    HasMixedLiveStock: false,
    HasHorticulturalCrops: true,
    HasBerries: true,
    LeafTests: null,
    LeafTestingMethod: '0',
    UserJourney: 7,
  },
  unsaved: false,
  years: [
    {
      Year: '',
      Fields: [],
      FarmAnimals: [],
      FarmManures: [],
      GeneratedManures: [],
      ImportedManures: [],
      SeparatedSolidManures: [],
      ManureStorageSystems: [],
    },
  ],
  LastAppliedFarmManureId: null,
  NMPReleaseVersion: 3,
};

const templateCropNMP = {
  id: 1,
  cropId: '75',
  cropOther: null,
  yield: 5.0,
  reqN: 38.0,
  stdN: 0.0,
  reqP2o5: 0.0,
  reqK2o: 0.0,
  remN: 0.0,
  remP2o5: 7.0,
  remK2o: 25.0,
  crudeProtien: null,
  prevCropId: 0,
  coverCropHarvested: null,
  prevYearManureAppl_volCatCd: 0,
  yieldHarvestUnit: 1,
  yieldByHarvestUnit: 5.0,
  plantAgeYears: '1',
  numberOfPlantsPerAcre: 2498,
  distanceBtwnPlantsRows: '0.6 m x 2.7 m (2 ft x 9 ft)',
  willPlantsBePruned: true,
  whereWillPruningsGo: 'Removed from field',
  willSawdustBeApplied: true,
};

const templateNutrientsNMP: NmpFertilizerInterface = {
  id: 1,
  fertilizerTypeId: 1,
  fertilizerId: 1,
  applUnitId: 1,
  applRate: 100.0,
  applDate: '2024-06-01T00:00:00',
  applMethodId: 1,
  customN: 10.0,
  customP2o5: 15.0,
  customK2o: 30.0,
  fertN: 10.0,
  fertP2o5: 15.0,
  fertK2o: 30.0,
  liquidDensity: 0.0,
  liquidDensityUnitId: 0,
};

const templateFieldNMP: NmpFieldInterface = {
  Id: 1,
  FieldName: 'FieldA',
  Area: 1.0,
  Comment: 'Comments(optional)',
  Nutrients: undefined,
  HasNutrients: false,
  Crops: [],
  FeedForageAnalyses: [],
  SoilTest: {
    sampleDate: '2024-06-01T00:00:00',
    valNO3H: 12.0,
    ValP: 12.0,
    valK: 12.0,
    valPH: 7.0,
    ConvertedKelownaP: 24,
    ConvertedKelownaK: 10,
  },
  LeafTest: {
    leafTissueP: 10.0,
    leafTissueK: 10.0,
  },
  HasSoilTest: true,
  PreviousYearManureApplicationFrequency: null,
  PreviousYearManureApplicationNitrogenCredit: null,
  SoilTestNitrateOverrideNitrogenCredit: null,
  IsSeasonalFeedingArea: false,
  SeasonalFeedingArea: null,
  FeedingDaysSpentInFeedingArea: null,
  FeedingPercentageOutsideFeeingArea: null,
  MatureAnimalCount: null,
  GrowingAnimalCount: null,
  MatureAnimalAverageWeight: null,
  GrowingAnimalAverageWeight: null,
  MatureAnimalDailyFeedRequirementId: 0,
  GrowingAnimalDailyFeedRequirementId: 0,
};

export { templateNMP, templateFieldNMP, templateCropNMP, templateNutrientsNMP };
