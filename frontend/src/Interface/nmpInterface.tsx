/**
 * @summary Interface nmp files
 * @description This interface describes the structure of an nmp file
 *              to help in conversion for BetterBerries with
 *              FarmDetailsInterface
 * @author @GDamaso
 */
interface nmpInterface {
  farmDetails: {
    Year: string;
    FarmName: string;
    FarmRegion: number;
    FarmSubRegion?: number;
    SoilTests?: string;
    TestingMethod: string;
    Manure?: string;
    HasSelectedFarmType: boolean;
    ImportsManureCompost: boolean;
    HasAnimals: boolean;
    HasDairyCows: boolean;
    HasBeefCows: boolean;
    HasPoultry: boolean;
    HasMixedLiveStock: boolean;
    HasHorticulturalCrops: boolean;
    HasBerries: boolean;
    LeafTests?: boolean;
    LeafTestingMethod: string;
    UserJourney: number;
  };
  unsaved: boolean;
  years: [
    {
      Year: string;
      Fields: [
        {
          Id: number;
          FieldName: string;
          Area: number;
          Comment: string;
          Nutrients?: boolean;
          HasNutrients: boolean;
          Crops: [
            {
              id: number;
              cropId: string;
              cropOther?: boolean;
              yield: number;
              reqN: number;
              stdN: number;
              reqP2o5: number;
              reqK2o: number;
              remN: number;
              remP2o5: number;
              remK2o: number;
              crudeProtien: boolean;
              prevCropId: number;
              coverCropHarvested?: boolean;
              prevYearManureAppl_volCatCd: number;
              yieldHarvestUnit: number;
              yieldByHarvestUnit: number;
              plantAgeYears: string;
              numberOfPlantsPerAcre: number;
              distanceBtwnPlantsRows: string;
              willPlantsBePruned: boolean;
              whereWillPruningsGo: string;
              willSawdustBeApplied: boolean;
            },
          ];
          FeedForageAnalyses: [];
          SoilTest?: boolean;
          LeafTest: {
            leafTissueP: number;
            leafTissueK: number;
          };
          HasSoilTest?: boolean;
          PreviousYearManureApplicationFrequency?: boolean;
          PreviousYearManureApplicationNitrogenCredit?: boolean;
          SoilTestNitrateOverrideNitrogenCredit?: boolean;
          IsSeasonalFeedingArea?: boolean;
          SeasonalFeedingArea?: boolean;
          FeedingDaysSpentInFeedingArea?: boolean;
          FeedingPercentageOutsideFeeingArea?: boolean;
          MatureAnimalCount?: boolean;
          GrowingAnimalCount?: boolean;
          MatureAnimalAverageWeight?: boolean;
          GrowingAnimalAverageWeight?: boolean;
          MatureAnimalDailyFeedRequirementId?: number;
          GrowingAnimalDailyFeedRequirementId: number;
        },
      ];
      FarmAnimals: [];
      FarmManures: [
        {
          Id: number;
          Customized: boolean;
          SourceOfMaterialId: string;
          SourceOfMaterialStoredSystemId?: boolean;
          SourceOfMaterialImportedManureId: number;
          SourceOfMaterialName: string;
          ManureId: number;
          Name?: boolean;
          ManureClass?: boolean;
          SolidLiquid?: boolean;
          Moisture?: boolean;
          Nitrogen: number;
          Ammonia: number;
          Phosphorous: number;
          Potassium: number;
          DMId: number;
          NMinerizationId: number;
          Nitrate?: boolean;
          Stored_Imported: number;
          IsAssignedToStorage: boolean;
          IncludedSourceOfMaterialIds: [];
          GroupedWithCollectedAnalysisSourceItemIds: [];
        },
      ];
      GeneratedManures: [];
      ImportedManures: [
        {
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
          Moisture: number;
          StandardSolidMoisture: number;
          IsMaterialStored: boolean;
          ManureId: string;
          ManagedManureName: string;
          Id: number;
          ManureType: number;
          AssignedToStoredSystem: boolean;
          AssignedWithNutrientAnalysis: boolean;
        },
      ];
      SeparatedSolidManures: [];
      ManureStorageSystems: [];
    },
  ];
  LastAppliedFarmManureId: null;
  NMPReleaseVersion: number;
}

export default nmpInterface;
