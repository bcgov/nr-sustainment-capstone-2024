interface NmpFertilizerInterface {
  id: number;
  fertilizerTypeId: number;
  fertilizerId: number;
  applRate: number;
  applUnitId: number;
  applDate: string | null;
  applMethodId: number;
  customN: number | null;
  customP2o5: number | null;
  customK2o: number | null;
  fertN: number;
  fertP2o5: number;
  fertK2o: number;
  liquidDensity: number;
  liquidDensityUnitId: number;
}

export default NmpFertilizerInterface;
