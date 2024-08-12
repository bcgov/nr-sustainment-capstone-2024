interface FertilizerInterface {
  id: number;
  fertilizerTypeId: string;
  fertilizerId: string;
  applRate: number;
  applUnitId: string;
  applDate: string | null;
  applMethodId: string;
  customN: number | null;
  customP2o5: number | null;
  customK2o: number | null;
  fertN: number;
  fertP2o5: number;
  fertK2o: number;
  liquidDensity: number;
  liquidDensityUnitId: string;
}

export default FertilizerInterface;
