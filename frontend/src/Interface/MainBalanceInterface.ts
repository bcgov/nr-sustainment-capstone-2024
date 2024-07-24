import AgronomicBalanceInterface from './AgronomicBalanceInterface';
import CropRemovalBalanceInterface from './CropRemovalBalance';

interface MainBalanceInterface {
  agronomic: AgronomicBalanceInterface;
  cropRemoval: CropRemovalBalanceInterface;
}

export default MainBalanceInterface;
