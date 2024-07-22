interface NutrientRange {
  min?: number;
  max?: number;
  addition: number;
}

interface SoilTestRange {
  min?: number;
  max?: number;
  leaf_tissue_ranges?: NutrientRange[];
}

interface Params {
  sawdust?: string;
  Yield?: string;
  soil_test?: string;
  leaf_tissue?: string;
  Pruned?: string;
  Removed?: string;
}

interface Calculation {
  description: string;
  params: Params;
  logic: CalcLogic;
}

interface AgronomicBalance {
  nitrogen_calculation: Calculation;
  phosphorus_calculation: Calculation;
  potassium_calculation: Calculation;
}

interface CropRemovalBalance {
  phosphorus_removal: Calculation;
  potassium_removal: Calculation;
}

export interface CalcLogic {
  sawdust_addition?: number;
  yield_ranges?: NutrientRange[];
  soil_test_ranges?: SoilTestRange[];
  N?: number;
  P?: number;
  K?: number;
}

interface CalculationTable {
  cropType: string;
  crop: string;
  agronomic_balance: AgronomicBalance;
  crop_removal_balance: CropRemovalBalance;
}

export default CalculationTable;
