const dbPool = require("../config/database");

const getAllUsers = () => {
  const query = `SELECT * FROM users`;
  return dbPool.execute(query);
};

module.exports = {
  getAllUsers,
};
