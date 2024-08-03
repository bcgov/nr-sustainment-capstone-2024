import { DryFertilizerOptions, LiquidFertilizerOptions } from '@Constants/FertilizersOptions';
import OptionInterface from '@Interface/OptionInterface';

function getFertilizerOption(nutrientId: string): OptionInterface | undefined {
  const dryOption = DryFertilizerOptions.find((option) => option.value === nutrientId);
  const liquidOption = LiquidFertilizerOptions.find((option) => option.value === nutrientId);
  return dryOption ?? liquidOption;
}

export default getFertilizerOption;
