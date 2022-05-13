const argon2 = require('argon2');
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

const getUser = async (req, res,) => {
  let userId = req.params.id;
  let searchedUser = null;
  
  try {
    searchedUser= await user.findOne({
      where: { id: userId}
    });

    return res.status(200).json(searchedUser)
  
  }catch(error) {
    
    return res.status(402).json({message: "El ID buscado no existe"})
  }
}



const createUser = async (req, res) => {
  const { password, email } = req.body;

  let hash = null;
  try {
    hash = await argon2.hash(password);
  } catch (err) {
    console.log(`Hubo un error encriptando la contraseña del usuario ${req.body.email}`);
    console.error(err);
  }

  // Create user in database
  let createdUser = null;
  try {
    createdUser = await user.create({
      ...req.body,
      password: hash
    }); 
  } catch(err) {
    console.error(err);
    if  (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(402).json({ message: 'El usuario ya existe'});
    }
    return res.status(402).json({ error: err })
  }

  return res.status(200).json(createdUser);
}

const updateUser = (async (req, res) => {
  const { id } = req.params;

  let selectedUser = null;
  try {
    selectedUser = await user.findByPk(id);
  } catch (error) {
    return res.status(402).json({  message: error.message });
  }

  if (!selectedUser) {
    return res.status(400).json({ message: 'No encontramos el usuario' })
  }

  await selectedUser.update(req.body);

  return res.json(selectedUser);
})

const deleteUser = async (req, res) => {
  let userId = req.params.id;
  let deletedUser = null;
  try {
    deletedUser = await user.destroy({
      where: {
        id: userId
      }
    });
  } catch(err) {
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
