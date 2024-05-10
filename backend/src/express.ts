// Middleware is activated here
// Any processing of HTTP Requests is done here 
// before routing them to their target endpoints
import express, {Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import apiRouter from './routes/api-router';

const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());    // Compressor of body data, improving transfer speeds
app.use(morgan('dev'));    // Logger Requests and Responses in the console
app.use(cors());           // Activate CORS, allowing access 

// Serve API static docs page
app.use('/api/api-docs', express.static(path.join(__dirname, './docs/redoc-static.html')));

// Routes
app.use('/api', apiRouter);

export default app;
