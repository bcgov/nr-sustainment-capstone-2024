import FieldDetailInterface from 'src/Interface/FieldDetailsInterface';

const emptyFieldDetails: FieldDetailInterface = {
  Id: 0,
  FieldName: '',
  Area: 0,
  Comment: '',
  HasSoilTest: null,
  HasLeafTest: null,
  SoilTest: { TestingMethod: '', sampleDate: '', valNO3H: 0, ValP: 0, valK: 0, valPH: 0 },
  LeafTest: { leafTissueP: 0, leafTissueK: 0 },
};

export default emptyFieldDetails;
