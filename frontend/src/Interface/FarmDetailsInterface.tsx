/**
 * @summary     Interface for the main data file
 * @description This interface defines how the main data file should be structured,
 *              which values it takes and any calculation results. This can then
 *              be exported as JSON.
 * @author @GDamaso
 */
import FieldDetailInterface from './FieldDetailsInterface';

interface FarmDetailsInterface {
  Year: string;
  FarmName: string;
  FarmRegion: number;
  HasBerries: boolean;
  Fields: FieldDetailInterface[];
}

export default FarmDetailsInterface;
