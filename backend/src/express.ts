<<<<<<< HEAD
=======
// Middleware is activated here
// Any processing of HTTP Requests is done here 
// before routing them to their target endpoints
>>>>>>> main
import express, {Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
<<<<<<< HEAD
import apiRouter from './routes/api.router';
import path from 'path';
=======
import apiRouter from './routes/api-router';
>>>>>>> main

const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
// app.use(cookieParser());
// app.use(compression());
// app.use(morgan('dev'));
app.use(cors());

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express root');
});

// Routes
app.use('/api', apiRouter);
app.use('/api/api-docs', express.static(path.join(__dirname, './docs/redoc-static.html')));

=======
app.use(cookieParser());
app.use(compression());    // Compressor of body data, improving transfer speeds
app.use(morgan('dev'));    // Logger Requests and Responses in the console
app.use(cors());           // Activate CORS, allowing access 

// Routes
app.use('/api', apiRouter);
>>>>>>> main

export default app;
