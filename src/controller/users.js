const getAllUsers = (req, res) => {
    const data = [{
        id: 1,
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

const updateUser = (req, res) => {
    const {userId} = req.params;
    console.log(`user_id: ${userId}`);
    res.json({
        message: 'UPDATE user successfully',
        data: req.body
    });
}

const deleteUser = (req, res) => {
    const {userId} = req.params;
    res.json({
        message: 'DELETE user successfully',
        data: {
            id: Number(userId),
            name: "Rochmad Nurul Fahmi",
            email: "rochmadnf@gmail.com",
            address: "Jl. Cempedak"
        }
    });
}



module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
};