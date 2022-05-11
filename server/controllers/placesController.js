const { places } = require("../models");

const getPlaces = async (req, res) => {
  try {
    places = await places.findAll();
    return res.status(200).json(places);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err });
  }
};

const getPlace = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await places.find({
      where: {
        id,
      },
    });
    return place;
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const createPlace = async (req, res) => {
  let placeCreated = null;
  try {
    placeCreated = await places.create(req.body);
  } catch (err) {
    console.error(err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(402).json({ message: "El lugar ya existe" });
    }
    return res.status(402).json({ error: err });
  }

  return res.status(200).json(placeCreated);
};

const updatePlace = async (req, res) => {
  const { id } = req.params;
  try {
    placeUpdated = await places.update(req.body, {
      where: {
        id,
      },
    });
  } catch (err) {
    return res.status(402).json({ error: err });
  }

  return res.status(200).json(placeUpdated);
};

const deletePlace = () => {
  const { id } = req.params;
  try {
    placeUpdated = await places.destroy(req.body, {
      where: {
        id,
      },
    });
  } catch (err) {
    return res.status(402).json({ error: err });
  }

  return res.status(200).json(placeUpdated);
};

module.exports = {
  getAll: getPlaces,
  getOne: getPlace,
  create: createPlace,
  update: updatePlace,
  delete: deletePlace,
};
