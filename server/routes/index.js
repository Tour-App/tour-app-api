const express = require("express");

const router = express.Router();

const user = require("../controllers/userController");
const place = require("../controllers/placesController");

router.get("/users", user.getAll);
router.post("/users", user.create);
router.post("/users/:id", user.update);
router.get("/users/:id", user.getOne);
router.delete("/users/:id", user.delete);

// TODO 5 - Agregar CRUD de places (Brenda)

router.get("/places", place.getAll);
router.post("/places", place.create);
router.post("/places/:id", place.update);
router.get("/places/:id", place.getOne);
router.delete("/places/:id", place.delete);

module.exports = router;
