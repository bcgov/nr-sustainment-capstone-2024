// Root|/api endpoint router
// Any routes in /api can be accessed through here
import express from 'express';
import getDevelopers from '../controllers/developers-controller';

const router = express.Router();

router.route('/developers').get(getDevelopers);

export default router;
