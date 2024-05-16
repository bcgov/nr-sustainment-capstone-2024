import pg from 'pg';

const { Client } = pg;

const client = new Client({
  user: 'admin',
  password: 'admin',
  host: 'host.docker.internal',
  database: 'admin',
});
client.connect();

const query = (text: any, params?: any[]): Promise<any> => client.query(text, params);

export default query;
