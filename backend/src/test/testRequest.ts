import supertest from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const testPoint = `http://${process.env.API_HOST}:${process.env.API_PORT}/api`;
const testRequest = supertest(testPoint);

export { testRequest };
