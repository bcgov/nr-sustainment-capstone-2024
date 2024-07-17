/**
 * @summary   Interface for props of Input Module
 * @desc      This interface defines props to be passed to an InputModule,
 *            which are mainly a farmDetails object and a setState function
 *            for updating it.
 *
 * @author    @GDamaso
 */
import FarmDetailsInterface from './FarmDetailsInterface';
import { TempNutrientsInterface } from './NutrientsInterface';

interface InputModuleProps {
  farmDetails: FarmDetailsInterface;
  fertilizersDetails: TempNutrientsInterface[];
  updateFarmDetails: (farmDetails: FarmDetailsInterface) => void;
  updateNutrientDetails?: (nutrientDetails: TempNutrientsInterface) => void;
  handleFormState(cmd: string, toggle?: boolean, status?: string): void;
}

export default InputModuleProps;
