/**
 * @desc    This populates the initial values of Formik input fields,
 *          which must be initialized. It does not like null or undefined
 *          values which changes components from being controlled
 *          to uncontrolled.
 * @author  @GDamaso
 */
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';

const initialFarmDetails: FarmDetailsInterface = {
  Year: '',
  FarmName: '',
  FarmRegion: '',
  HasBerries: true,
  Fields: [
    {
      Id: 0,
      FieldName: '',
      Area: 0,
      Comment: '',
      HasSoilTest: null,
      HasLeafTest: null,
      SoilTest: { TestingMethod: '', sampleDate: '', valNO3H: 0, ValP: 0, valK: 0, valPH: 0 },
      LeafTest: { leafTissueP: 0, leafTissueK: 0 },
      Crops: [
        {
          id: 0,
          cropId: '',
          yield: 0,
          plantAgeYears: '',
          numberOfPlantsPerAcre: 0,
          distanceBtwnPlantsRows: '',
          willPlantsBePruned: undefined,
          whereWillPruningsGo: '',
          willSawdustBeApplied: undefined,
        },
      ],
    },
  ],
};

export default initialFarmDetails;
