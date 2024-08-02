import { DryFertilizerOptions, LiquidFertilizerOptions } from '@Constants/FertilizersOptions';
import OptionInterface from '@Interface/OptionInterface';

function getFertilizerOption(nutrientId: string, isFertDry?: boolean): OptionInterface | undefined {
  if (isFertDry === undefined) {
    const dryOption = DryFertilizerOptions.find((option) => option.value === nutrientId);
    const liquidOption = LiquidFertilizerOptions.find((option) => option.value === nutrientId);
    return dryOption ?? liquidOption;
  } else {
    const option = isFertDry ? DryFertilizerOptions : LiquidFertilizerOptions;
    return option.find((option) => option.value === nutrientId);
  }
}

export default getFertilizerOption;
