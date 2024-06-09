import FarmDetailsInterface from './FarmDetailsInterface';

interface InputModuleProps {
  farmDetails: FarmDetailsInterface;
  updateFarmDetails: (farmDetails: FarmDetailsInterface) => void;
}

export default InputModuleProps;
