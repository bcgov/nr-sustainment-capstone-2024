import express from 'express';
import checkHealth from '../controllers/health-api-controller';

const router = express.Router();

router.route('/health').get(checkHealth);

export default router;
