/**
 * @summary   Interface for props of Input Module
 * @desc      This interface defines props to be passed to an InputModule,
 *            which are mainly a farmDetails object and a setState function
 *            for updating it.
 *
 * @author    @GDamaso
 */
import FarmDetailsInterface from './FarmDetailsInterface';

interface InputModuleProps {
  farmDetails: FarmDetailsInterface;
  updateFarmDetails: (farmDetails: FarmDetailsInterface) => void;
}

export default InputModuleProps;
