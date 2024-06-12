/**
 * @desc This file connects the api to the database and exports a
 * simple query module for accessing it's data
 * @author @GDamaso
 */
import pg from 'pg';

const { Client } = pg;

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
});
client.connect();

const query = (text: any, params?: any[]): Promise<any> => client.query(text, params);

export default query;

// Log client for troubleshooting
if (process.env.LOG_LEVEL !== 'info') {
  client.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database:', res.rows[0]);
    }
  });
  console.debug('Client:', client);
}
