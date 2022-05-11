const { user } = require('../models');

const getUsers = async (req, res) => {
  let users = [];
  try {
    users = await user.findAll();
  } catch(err) {
    console.error(err);
    return res.status(400).json({ error: err })
  }

  return res.status(200).json(users)
}

const getUser = () => {
  // TODO 4 - Obten la información de un solo usuario (Luis)
}

const createUser = async (req, res) => {
  // Validate data
  console.log(req.body);

  // Create user in database
  let createdUser = null;
  try {
    createdUser = await user.create(req.body); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(402).json({ message: 'El usuario ya existe'});
    }
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdUser);
}

const updateUser = () => {
  // TODO 2 - Actualizar información del usuario (Rocio)
}

const deleteUser = async (req, res) => {
  // TODO 3 -Borrar información del usuario (Belem)
  let userId = req.params.id;
  let deletedUser = null;
  try {
    deletedUser = await user.destroy({
      where: {
        id: userId
      }
    });
  } catch(err) {
    console.error(err);
    return res.status(402).json({ error: err })
  }
  if (!deletedUser) {
    return res.status(402).json({message: "El usuario que intentas borrar, no existe"})
  }
  return res.status(200).json({message: "Usuario borrado exitosamente"})
}

module.exports = {
  getAll: getUsers,
  getOne: getUser,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
}
