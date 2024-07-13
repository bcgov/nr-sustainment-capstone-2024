/*
 * @desc    This populates the initial values of Formik input fields,
 *          which must be initialized. It does not like null or undefined
 *          values which changes components from being controlled
 *          to uncontrolled. Number values are being initialized to empty strings
 *          because of this. It's a small hack to get the behaviour we want.
 * @author  @GDamaso
 *
 */

/*
 * This has an 'any' type because we need to initialize some numbers to an empty string
 * to get the correct behaviour from formik/yup validation. It should be a FarmDetailInterface
 * otherwise, which do not take strings instead of numbers... mostly.
 */
const initialFarmDetails: any = {
  Year: '',
  FarmName: '',
  FarmRegion: '',
  HasBerries: true,
  Fields: [
    {
      Id: 0,
      FieldName: '',
      Area: '',
      Comment: '',
      HasSoilTest: '',
      HasLeafTest: '',
      SoilTest: { TestingMethod: '', sampleDate: '', valNO3H: '', ValP: '', valK: '', valPH: '' },
      LeafTest: { leafTissueP: '', leafTissueK: '' },
      Crops: [
        {
          id: 0,
          cropId: '',
          yield: '',
          plantAgeYears: '',
          numberOfPlantsPerAcre: '',
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
