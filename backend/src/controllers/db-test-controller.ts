/**
 * @desc Simple database test endpoint to check API to db connection status
 * @author GDamaso
 */
import { Response, Request } from 'express';
import { query } from '../db';
import { Query } from 'pg';


const getTime = async (req: Request, res: Response) => {
  const time  = await query('SELECT NOW()');
  res.status(200).send(time.rows[0]);
};

export default getTime;
