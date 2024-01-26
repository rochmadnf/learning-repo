const express = require('express');

const {getAllUsers, createNewUser, updateUser, deleteUser} = require('../controller/users')

const router = express.Router();
// CREATE - POST
router.post('/', createNewUser);

// READ - GET
router.get('/', getAllUsers);

// UPDATE - PATCH
router.patch('/:userId', updateUser);

// DELETE - DELETE
router.delete('/:userId', deleteUser);


module.exports = router;