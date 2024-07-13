/**
 * @desc    This populates the initial values of Formik input fields,
 *          which must be initialized. It does not like null or undefined
 *          values which changes components from being controlled
 *          to uncontrolled.
 * @author  @GDamaso
 */
import FarmDetailsInterface from '@Interface/FarmDetailsInterface';

const initialFarmDetails: any = {
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
      HasSoilTest: '',
      HasLeafTest: '',
      SoilTest: { TestingMethod: '', sampleDate: '', valNO3H: '', ValP: '', valK: '', valPH: '' },
      LeafTest: { leafTissueP: '', leafTissueK: '' },
      Crops: [
        {
          id: 0,
          cropId: '',
          yield: 0,
          plantAgeYears: '',
          numberOfPlantsPerAcre: 0,
          distanceBtwnPlantsRows: '',
          willPlantsBePruned: false,
          whereWillPruningsGo: '',
          willSawdustBeApplied: false,
        },
      ],
    },
  ],
};

export default initialFarmDetails;
