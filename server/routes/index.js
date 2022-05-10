const express = require('express');

const router = express.Router();

const user = require('../controllers/userController');

router.get('/users', user.getUsers);
router.post('/users', user.createUser);

module.exports = router;