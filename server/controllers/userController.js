const { user } = require('../models');

const getUsers = (req, res) => {

}

const createUser = async (req, res) => {
  // Validate data
  console.log(req.body);

  // Create user in database

  let createdUser = null;
  try {
    await user.create(req.body); 
  } catch(err) {
    console.error(err);
    res.status(404).json({ message: 'No pudimos crear al usuario'})
  }

  return res.status(200).json(createdUser);
}


module.exports = {
  getUsers,
  createUser,
}