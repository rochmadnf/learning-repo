const mysqli = require("mysql2");

const dbPool = mysqli.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
});

module.exports = dbPool.promise();
