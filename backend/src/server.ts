/**
 * @desc First contact of HTTP requests, they then are handed to express
 * @summary API Server
 * @author GDamaso
 */
import app from './express';

// Get api port from environment variables, failsafe to 3000
const API_PORT = process.env.API_PORT;

// Start HTTP Server
app.listen(API_PORT, () => {
  console.info(`Server running on port: ${API_PORT}`);
});
