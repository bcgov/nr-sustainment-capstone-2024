/**
 * @desc Simple database test endpoint to check API to db connection status
 * @author GDamaso
 */
import { Response, Request } from 'express';

const getSeedData = (req: Request, res: Response) => {
  res.status(200).send('NMP API is healthy and ready!');
};

export default getSeedData;
