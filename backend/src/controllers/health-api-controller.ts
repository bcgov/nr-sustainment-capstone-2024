/**
 * @desc Simple health endpoint to check API status
 * @author GDamaso
 */
import { Response, Request } from 'express';


const checkHealth = (req: Request, res: Response) => {
  res.status(200).send('NMP API is healthy and ready! Hot reloading all the way!');
};

export default checkHealth;
