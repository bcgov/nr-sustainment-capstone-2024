import { TempNutrientsInterface } from '@Interface/NutrientsInterface';

/**
 * @summary   Temporary Storage of Nutrients
 * @desc      This is a temporary storage before getting passed in into @farmDetails
 *            of FarmDetailInterface. This will be an option for a dropdown in Calculation Module
 *            After being selected into a field. It will then be passed in to the interface.
 * @author    @Kcaparas
 */
const tempNutrientsStorage: TempNutrientsInterface[] = [
  {
    id: 0,
    fertilizerTypeId: '',
    fertilizerId: '',
    applRate: 0,
    applDate: '',
    applMethodId: '',
    applUnitId: '',
    customN: 0,
    customP2o5: 0,
    customK2o: 0,
    fertN: 0,
    fertP2o5: 0,
    fertK2o: 0,
    liquidDensity: 0,
    liquidDensityUnitId: '',
  },
];

export default tempNutrientsStorage;
