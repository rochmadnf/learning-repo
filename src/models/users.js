const dbPool = require("../config/database");

const getAllUsers = () => {
  const query = `SELECT * FROM users`;
  return dbPool.execute(query);
};

const createNewUser = (values) => {
  return dbPool.execute(
    `INSERT INTO users (name, email, address) VALUES('${values.name}', '${values.email}', '${values.address}')`
  );
};

module.exports = {
  getAllUsers,
  createNewUser,
};
