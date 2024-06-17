/**
 * @summary Interface for the main data file
 * @description This interface defines how the main data file should be structured,
 *              which values it takes and any calculation results. This can then
 *              be exported as JSON.
 * @author @GDamaso
 */
interface FarmDetailsInterface {
  Year: string;
  FarmName: string;
  FarmRegion: string;
  FieldName: string;
  Acres: number;
  Comments?: string;
  HasBerries: boolean;
}

export default FarmDetailsInterface;
