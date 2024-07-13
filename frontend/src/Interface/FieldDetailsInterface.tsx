import { CropsDetailsInterface } from './CropsDetailsInterface';
import LeafTestInterface from './LeafTestInterface';
import SoilTestInterface from './SoilTestInterface';

/**
 * @summary     Interface for the BB Field
 * @description This interface defines the atributes of a Filed in
 *              the BetterBerries App
 * @author @GDamaso
 */
interface FieldDetailInterface {
  Id: number;
  FieldName: string;
  Area: number;
  Comment?: string | undefined;
  HasSoilTest?: boolean;
  HasLeafTest?: boolean;
  SoilTest: SoilTestInterface;
  LeafTest: LeafTestInterface;
  Crops: CropsDetailsInterface[];
}

export default FieldDetailInterface;
