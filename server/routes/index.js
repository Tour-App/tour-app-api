const express = require('express');

const router = express.Router();

const user = require('../controllers/userController');
const city = require('../controllers/cityController')

router.get('/users', user.getAll);
router.post('/users', user.create);
router.put('/users/:id', user.update);
router.get('/users/:id', user.getOne);
router.delete('/users/:id', user.delete);

// TODO 5 - Agregar CRUD de places (Brenda)

//CRUD city
router.get('/cities', city.getAll);
router.get('/cities/:id', city.getOne);
router.post('/cities', city.create);
router.post('/cities/:id', city.update);
router.delete('/cities/:id', city.delete);

module.exports = router;