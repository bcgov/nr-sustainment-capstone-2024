/**
 * @summary Interface nmp files
 * @description This interface describes the structure of an nmp file
 *              to help in conversion for BetterBerries with
 *              FarmDetailsInterface
 * @author @GDamaso
 */
interface CropInterface {
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

interface nmpFieldInterface {
  Id: number;
  FieldName: string;
  Area: number;
  Comment?: string | null;
  Nutrients?: any[] | null;
  HasNutrients: boolean;
  Crops: CropInterface[];
  FeedForageAnalyses: any[];
  SoilTest?: {
    sampleDate: string;
    valNO3H: number;
    ValP: number;
    valK: number;
    valPH: number;
    ConvertedKelownaP: number;
    ConvertedKelownaK: number;
  } | null;
  LeafTest?: {
    leafTissueP: number;
    leafTissueK: number;
  } | null;
  HasSoilTest: boolean;
  PreviousYearManureApplicationFrequency?: any;
  PreviousYearManureApplicationNitrogenCredit?: any;
  SoilTestNitrateOverrideNitrogenCredit?: any;
  IsSeasonalFeedingArea: boolean;
  SeasonalFeedingArea?: any;
  FeedingDaysSpentInFeedingArea?: any;
  FeedingPercentageOutsideFeeingArea?: any;
  MatureAnimalCount?: any;
  GrowingAnimalCount?: any;
  MatureAnimalAverageWeight?: any;
  GrowingAnimalAverageWeight?: any;
  MatureAnimalDailyFeedRequirementId: number;
  GrowingAnimalDailyFeedRequirementId: number;
}

interface ManureInterface {
  Id: number;
  Customized: boolean;
  SourceOfMaterialId: string;
  SourceOfMaterialStoredSystemId?: any;
  SourceOfMaterialImportedManureId: number;
  SourceOfMaterialName: string;
  ManureId: number;
  Name?: string | null;
  ManureClass?: string | null;
  SolidLiquid?: string | null;
  Moisture?: string | null;
  Nitrogen: number;
  Ammonia: number;
  Phosphorous: number;
  Potassium: number;
  DMId: number;
  NMinerizationId: number;
  Nitrate?: any;
  Stored_Imported: number;
  IsAssignedToStorage: boolean;
  IncludedSourceOfMaterialIds: any[];
  GroupedWithCollectedAnalysisSourceItemIds: any[];
}

interface ImportedManureInterface {
  MaterialName: string;
  ManureTypeName: string;
  AnnualAmount: number;
  AnnualAmountUSGallonsVolume: number;
  AnnualAmountCubicYardsVolume: number;
  AnnualAmountCubicMetersVolume: number;
  AnnualAmountTonsWeight: number;
  AnnualAmountDisplayVolume: string;
  AnnualAmountDisplayWeight: string;
  Units: number;
  Moisture?: number | null;
  StandardSolidMoisture: number;
  IsMaterialStored: boolean;
  ManureId: string;
  ManagedManureName: string;
  Id: number;
  ManureType: number;
  AssignedToStoredSystem: boolean;
  AssignedWithNutrientAnalysis: boolean;
}

interface NmpInterface {
  farmDetails: {
    Year: string;
    FarmName: string;
    FarmRegion: number;
    FarmSubRegion: number | null;
    SoilTests: any;
    TestingMethod: string;
    Manure: any;
    HasSelectedFarmType: boolean;
    ImportsManureCompost: boolean;
    HasAnimals: boolean;
    HasDairyCows: boolean;
    HasBeefCows: boolean;
    HasPoultry: boolean;
    HasMixedLiveStock: boolean;
    HasHorticulturalCrops: boolean;
    HasBerries: boolean;
    LeafTests: any;
    LeafTestingMethod: string;
    UserJourney: number;
  };
  unsaved: boolean;
  years: {
    Year: string;
    Fields: nmpFieldInterface[];
    FarmAnimals: any[];
    FarmManures: ManureInterface[];
    GeneratedManures: any[];
    ImportedManures: ImportedManureInterface[];
    SeparatedSolidManures: any[];
    ManureStorageSystems: any[];
  }[];
  LastAppliedFarmManureId: number | null;
  NMPReleaseVersion: number;
}

export default NmpInterface;
export type { nmpFieldInterface };
