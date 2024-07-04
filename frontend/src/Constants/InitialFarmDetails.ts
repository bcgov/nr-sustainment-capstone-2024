// Initial Values for calculation, some defaults are being used
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';

const initialFarmDetails: FarmDetailsInterface = {
  Year: '',
  FarmName: '',
  FarmRegion: '',
  HasBerries: true,
  Fields: [{ Id: 0, FieldName: '', Area: 0, Comment: '', hasSoilTest: null, hasLeafTest: null }],
};

export default initialFarmDetails;
