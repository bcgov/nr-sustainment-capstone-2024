// Middleware is activated here
// Any processing of HTTP Requests is done here 
// before routing them to their target endpoints
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerConfig from './config/swaggerConfig';
import apiRouter from './routes/api-router';

const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());    // Compressor of body data, improving transfer speeds
app.use(morgan('dev'));    // Logger Requests and Responses in the console
app.use(cors());           // Activate CORS, allowing access 
app.use(
  '/api/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJSDoc(swaggerConfig),
  ),
);

// Routes
app.use('/api', apiRouter);

export default app;
