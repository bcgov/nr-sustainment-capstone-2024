/**
 * @summary     Interface nmp files
 * @description This interface describes the structure of an nmp Field
 * @author      @GDamaso
 */
import NmpCropInterface from './NmpCropInterface';

interface NmpFieldInterface {
  Id: number;
  FieldName: string;
  Area: number;
  Comment?: string | null;
  Nutrients?: any[] | null;
  HasNutrients: boolean;
  Crops: NmpCropInterface[];
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

export default NmpFieldInterface;
