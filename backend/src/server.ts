// API Server logic goes here
// It's the first file called when running this API
// It hands HTTP Requests to ./express.ts
import dotenv from 'dotenv';
import app from './express.ts';

// Get environment variables from .env file using DotEnv
dotenv.config();

// Get api port from environment variables, failsafe to 3000
const API_PORT = process.env.API_PORT || 3000;

// Start HTTP Server
app.listen(API_PORT, () => {
  console.info(`Server running on port: ${API_PORT}`);
});
