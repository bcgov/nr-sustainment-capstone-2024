/**
 * @summary     Interface nmp files
 * @description This interface describes the structure of an nmp file
 *              to help in conversion for BetterBerries FarmDetailsInterface
 *              and .nmp data structures
 * @author      @GDamaso
 */
import NmpFieldInterface from './NmpFieldInterface';

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
    Fields: NmpFieldInterface[];
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
