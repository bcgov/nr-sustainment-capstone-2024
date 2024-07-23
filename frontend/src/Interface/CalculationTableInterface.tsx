interface NutrientRange {
  min?: number;
  max?: number;
  addition: number;
}

interface SoilTestRange {
  min?: number;
  max?: number;
  leafTissueRanges?: NutrientRange[];
}

interface Params {
  sawdust?: string;
  Yield?: string;
  soilTest?: string;
  leafTissue?: string;
  Pruned?: string;
  Removed?: string;
}

export interface CalcLogic {
  sawdustAddition?: number;
  yieldRanges?: NutrientRange[];
  soilTestRanges?: SoilTestRange[];
  N?: number;
  P?: number;
  K?: number;
  fruitRemovalFactor?: number;
  pruningRemovalFactor?: number;
}

interface Calculation {
  description: string;
  params: Params;
  logic: CalcLogic;
}

interface AgronomicBalance {
  nitrogenCalculation: Calculation;
  phosphorusCalculation: Calculation;
  potassiumCalculation: Calculation;
}

export interface CropRemovalCoeficient {
  phosphorusRemoval: Calculation;
  potassiumRemoval: Calculation;
}

interface CalculationTable {
  cropType: string;
  crop: string;
  agronomicBalance: AgronomicBalance;
  cropRemovalBalance: CropRemovalCoeficient;
}

export default CalculationTable;
