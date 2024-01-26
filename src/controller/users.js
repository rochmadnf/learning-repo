const getAllUsers = (req, res) => {
    const data = [{
        name: "Rochmad Nurul Fahmi",
        email: "rochmadnf@gmail.com",
        address: "Jl. Cempedak"
    }];

    res.json({
        message: 'GET all users successfully',
        data: data,
    });
};

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new user successfully',
        data: req.body
    });
};

module.exports = {
    getAllUsers, createNewUser
};