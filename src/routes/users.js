const express = require('express');

const {getAllUsers, createNewUser} = require('../controller/users.js')

const router = express.Router();

router.get('', getAllUsers);

router.post('', createNewUser);

module.exports = router;