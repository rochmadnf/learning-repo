const express = require('express');

const {getAllUsers, createNewUser} = require('../controller/users.js')

const router = express.Router();
// CREATE - POST
router.post('', createNewUser);

// READ - GET
router.get('', getAllUsers);


module.exports = router;