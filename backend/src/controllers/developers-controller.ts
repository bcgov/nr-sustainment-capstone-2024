/**
 * @desc Simple database test endpoint to check API to db connection status
 * @author GDamaso
 */
import { Response, Request } from 'express';
import query from '../db';

const getDevelopers = async (req: Request, res: Response) => {
  const developers = await query('SELECT first_name, last_name FROM developers');
  const body = developers.rows.map((row: any) => row);
  res.status(200).send(body);
  console.log("openshift test!");
};

export default getDevelopers;
