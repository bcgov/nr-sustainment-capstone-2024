import express, {Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import apiRouter from './routes/api.router';
import path from 'path';

const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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


export default app;
