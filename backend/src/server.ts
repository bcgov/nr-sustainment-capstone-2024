import app from './express';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
})
