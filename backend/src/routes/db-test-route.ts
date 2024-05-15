// Root|/api endpoint router
// Any routes in /api can be accessed through here
import express from 'express';
import getSeedData from '../controllers/db-test-controller';

const router = express.Router();

router.route('/health').get(getSeedData); // Simple health endpoint to check API status

export default router;
