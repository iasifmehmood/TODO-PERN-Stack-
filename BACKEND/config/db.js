const { Pool } = require('pg');

const options = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
};

const pool = new Pool(options);

async function QueryDB(sql, params = []) {
  const client = await pool.connect();
  try {
    const result = await client.query(sql, params);
    return result.rows;
  } finally {
    client.release();
  }
}

module.exports = QueryDB;

// const mysql2 = require('mysql2/promise');

// const options = {
// host: process.env.HOST,
// user: process.env.USER,
// password: process.env.PASSWORD,
// database: process.env.DATABASE,
// };

// async function QueryDB(sql, params = []) {
//   const connection = await mysql2.createConnection(options);
//   const [rows] = await connection.execute(sql, params);
//   return rows;
// }

// module.exports = QueryDB;
