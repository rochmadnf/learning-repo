const model = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await model.getAllUsers();
    res.json({
      message: "GET all users successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      server_message: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await model.createNewUser(body);

    res.json({
      message: "CREATE new user successfully",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      server_message: error,
    });
  }
};

const updateUser = (req, res) => {
  const { userId } = req.params;
  console.log(`user_id: ${userId}`);
  res.json({
    message: "UPDATE user successfully",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  res.json({
    message: "DELETE user successfully",
    data: {
      id: Number(userId),
      name: "Rochmad Nurul Fahmi",
      email: "rochmadnf@gmail.com",
      address: "Jl. Cempedak",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
