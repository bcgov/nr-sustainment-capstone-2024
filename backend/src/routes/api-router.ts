// Root|/api endpoint router
// Any routes in /api can be accessed through here
import express from 'express';
import checkHealth from '../controllers/health-api-controller';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerConfig from '../config/swaggerConfig';

const router = express.Router();

router.route('/health').get(checkHealth);     // Simple health endpoint to check API status
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerJSDoc(swaggerConfig)));

export default router;
