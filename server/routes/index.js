const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");
const place = require("../controllers/placesController");
const city = require('../controllers/cityController')

const auth = require('../middlewares/authenticationMiddleware');

router.get('/users', user.getAll);
router.post('/users', user.create);
router.post('/users/:id', user.update);
router.get('/users/:id', user.getOne);
router.delete('/users/:id', user.delete);

router.post("/places", auth, place.create);
router.get("/places", place.getAll);
router.post("/places/:id", place.update);
router.get("/places/:id", place.getOne);
router.delete("/places/:id", place.delete);

router.get('/cities', city.getAll);
router.get('/cities/:id', city.getOne);
router.post('/cities', city.create);
router.post('/cities/:id', city.update);
router.delete('/cities/:id', city.delete);

module.exports = router;

