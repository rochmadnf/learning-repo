const getAllUsers = (req, res) => {
    res.json({
        message: 'GET all users successfully',
    });
};

const createNewUser = (req, res) => {
    res.json({
        message: 'CREATE new user successfully',
    });
};

module.exports = {
    getAllUsers, createNewUser
};