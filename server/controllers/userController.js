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

const updateUser = (async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, age, photo, phone_number, gender, identity_document, status, birth_date } = req.body;

  let selectedUser = null;
  try {
    selectedUser = await user.findByPk(id);
  } catch (error) {
    return res.status(402).json({  message: error.message });
  }

  if (!selectedUser) {
    return res.status(400).json({ message: 'No encontramos el usuario' })
  }

  selectedUser.first_name = first_name;
  selectedUser.last_name = last_name;
  selectedUser.email = email;
  selectedUser.password = password;
  selectedUser.age = age;
  selectedUser.photo = photo;
  selectedUser.phone_number = phone_number;
  selectedUser.gender = gender;
  selectedUser.identity_document = identity_document;
  selectedUser.status = status;
  selectedUser.birth_date = birth_date;

  await selectedUser.save();
  return res.json(selectedUser);
})

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
