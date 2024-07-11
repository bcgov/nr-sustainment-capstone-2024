import LeafTestInterface from './LeafTestInterface';
import SoilTestInterface from './SoilTestInterface';
import { CropsDetailsInterface } from './CropsDetailsInterface';

/**
 * @summary Interface for the main data file
 * @description This interface defines how the main data file should be structured,
 *              which values it takes and any calculation results. This can then
 *              be exported as JSON.
 * @author @GDamaso
 */
interface FieldDetailInterface {
  Id: number;
  FieldName: string;
  Area: number;
  Comment?: string | null;
  HasSoilTest: boolean | null;
  HasLeafTest: boolean | null;
  SoilTest: SoilTestInterface;
  LeafTest: LeafTestInterface;
  Crops: CropsDetailsInterface[];
}

export default FieldDetailInterface;
