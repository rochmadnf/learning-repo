const mysqli = require("mysql2");

const dbPool = mysqli.createPool({
  host: "localhost",
  user: "root",
  database: "express_mysql",
  password: "Local#123",
  waitForConnections: true,
});

module.exports = dbPool.promise();
