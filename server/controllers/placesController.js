const { place } = require("../models");

const getPlaces = async (_, res) => {
  try {
    const allplaces = await place.findAll();
    return res.status(200).json(allplaces);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err });
  }
};

const getPlace = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({
      message: "Lugar no encontrado",
    });
  }
  try {
    const placeFound = await place.findOne({
      where: {
        id,
      },
    });
    if (!placeFound) {
      return res.json({
        message: "Lugar no existe",
      });
    }
    return res.json(placeFound);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const createPlace = async (req, res) => {
  try {
    const placeCreated = await place.create(req.body);
    return res.status(200).json(placeCreated);
  } catch (err) {
    return res.status(402).json({ error: err.message });
  }
};

const updatePlace = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({
      message: "Lugar no encontrado",
    });
  }
  try {
    await place.update(req.body, {
      where: {
        id,
      },
    });
    return res.status(200).json({
      message: "Lugar actualizado",
    });
  } catch (err) {
    return res.status(402).json({ error: err.message });
  }
};

const deletePlace = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({
      message: "Lugar no encontrado",
    });
  }
  try {
    let placeDeleted = await place.destroy({
      where: {
        id,
      },
    });
    if (!placeDeleted) {
      return res.json({
        message: "No existe el lugar",
      });
    }
    return res.json({
      message: "Lugar eliminado",
    });
  } catch (err) {
    return res.status(402).json({ error: err.message });
  }
};

module.exports = {
  getAll: getPlaces,
  getOne: getPlace,
  create: createPlace,
  update: updatePlace,
  delete: deletePlace,
};
