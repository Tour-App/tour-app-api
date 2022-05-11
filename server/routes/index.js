const express = require('express');

const router = express.Router();

const user = require('../controllers/userController');

router.get('/users', user.getAll);
router.post('/users', user.create);
router.post('/users/:id', user.update);
router.get('/users/:id', user.getOne);
router.delete('/users/:id', user.delete);

// TODO 5 - Agregar CRUD de places

module.exports = router;