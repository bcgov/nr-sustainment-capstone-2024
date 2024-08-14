/**
 * @summary   Interface for props of Input Module
 * @desc      This interface defines props to be passed to an InputModule,
 *            which are mainly a farmDetails object and a setState function
 *            for updating it.
 *
 * @author    @GDamaso
 */
import FarmDetailsInterface from './FarmDetailsInterface';
import FertilizerInterface from './FertilizerInterface';

interface InputModuleProps {
  farmDetails: FarmDetailsInterface;
  fertilizersDetails: FertilizerInterface[];
  toggleEnabled?: boolean;
  updateFarmDetails: (farmDetails: FarmDetailsInterface, inputModuleID: string) => void;
  updateFertDetails?: (fertilizersDetails: FertilizerInterface[], moveNext?: boolean) => void;
  handleFormState(cmd: string, toggle?: boolean, status?: string): void;
}

export default InputModuleProps;
