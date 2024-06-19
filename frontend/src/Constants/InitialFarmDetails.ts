// Initial Values for calculation, some defaults are being used
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';

const initialFarmDetails: FarmDetailsInterface = {
  Year: '',
  FarmName: '',
  FarmRegion: '',
  HasBerries: true,
  Fields: [{ FieldName: '', Area: 0, Comments: null }],
};

export default initialFarmDetails;
