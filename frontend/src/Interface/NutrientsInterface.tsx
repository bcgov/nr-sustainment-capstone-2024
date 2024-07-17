export interface NutrientsInterface {
  id: number;
  fertilizerTypeId: string;
  fertilizerId: string;
  applUnitId: string;
  applRate: number;
  applDate?: string;
  applMethodId?: string;
  customN: number;
  customP2o5: number;
  customK2o: number;
  fertN: number;
  fertP2o5: number;
  fertK2o: number;
  liquidDensity: number;
  liquidDensityUnitId: string;
}
// temporarily stored until it gets assigned to field
export interface TempNutrientsInterface extends NutrientsInterface {}
