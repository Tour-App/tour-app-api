const argon2 = require('argon2');
const { admin } = require('../models');

async function createAdmin(req, res) {
  const { password, email } = req.body;

  try {
    hash = await argon2.hash(password);
  } catch (err) {
    console.log(`Hubo un error encriptando la contraseña del admin ${email}`);
    console.error(err);
  }

    // Create admin in database
    let createdAdmin = null;
    try {
      createdAdmin = await admin.create({
        ...req.body,
        password: hash
      }); 
    } catch(err) {
      console.error(err);
      if  (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(402).json({ message: 'El admin ya existe'});
      }
      return res.status(402).json({ error: err })
    }

  return res.status(200).json(createdAdmin);

}

module.exports = {
  create: createAdmin
}
