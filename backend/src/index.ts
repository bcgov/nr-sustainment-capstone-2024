import express, {Request, Response } from 'express';
import healthRoute from '../routes/health';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/health', healthRoute);

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express root');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
