import pg from 'pg';
const { Client } = pg;

const client = new Client({
  user: 'admin',
  password: 'admin',
  host: 'host.docker.internal',
  database: 'admin',
});
client.connect();

async function queryTime() {
  try {
    const result = await client.query('SELECT NOW()');
    console.log(result.rows[0]); 
  } catch (error) {
    console.error('Error:', error);
  }
}

queryTime();
