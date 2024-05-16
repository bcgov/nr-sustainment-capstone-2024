// Root|/api endpoint router
// Any routes in /api can be accessed through here
import express from 'express';
import getTime  from '../controllers/db-test-controller';

const router = express.Router();

router.route('/testDB').get(getTime); 

export default router;
