import express, {Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import healthRoute from './routes/health';

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
app.use('/api/health', healthRoute);

export default app;
