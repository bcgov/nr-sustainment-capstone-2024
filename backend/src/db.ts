import pg from 'pg';

const { Client } = pg;

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
});
client.connect();

const query = (text: any, params?: any[]): Promise<any> => client.query(text, params);

export default query;
