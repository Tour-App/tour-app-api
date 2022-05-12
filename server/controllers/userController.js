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

const deleteUser = () => {
  // TODO 3 -Borrar información del usuario (Belem)
}

module.exports = {
  getAll: getUsers,
  getOne: getUser,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
}
