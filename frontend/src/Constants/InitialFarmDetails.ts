// Initial Values for calculation, some defaults are being used
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';

const initialFarmDetails: FarmDetailsInterface = {
  Year: '2024',
  FarmName: 'Kents Steed',
  FarmRegion: '',
  HasBerries: true,
  Fields: [
    {
      FieldName: '',
      Area: 0,
      Comments: null,
    },
  ],
};

export default initialFarmDetails;
