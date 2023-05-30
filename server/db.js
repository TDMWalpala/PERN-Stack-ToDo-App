const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'todoapp'
});

console.log(pool);  // Outputs the pool object for debugging purposes

module.exports = pool;  // Exports the pool object for use in other files
