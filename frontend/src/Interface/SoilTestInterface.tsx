/**
 * @summary     Interface for the main data file
 * @description This interface defines how the main data file should be structured,
 *              which values it takes and any calculation results. This can then
 *              be exported as JSON.
 * @author      @Kcaparas
 */
interface SoilTestInterface {
  TestingMethod: string;
  sampleDate: string;
  valNO3H: number;
  ValP: number;
  valK: number;
  valPH: number;
}

export default SoilTestInterface;
