const argon2 = require('argon2');
const { admin } = require('../models');
const createToken = require('../utils/createToken');

async function login(req, res) {
  const { email, password: passwordToTest } = req.body;

  // 1. Validar si el usuario existe
  let adminLogged = null;
  try {
    adminLogged = await admin.findOne({
      where: { 
        email
      }
    })
  } catch(err) {
    console.error(err);
    throw new Error() // TODO: Quitar error
  }

  if (!adminLogged) {
    return res.status(404).json({ message: 'No pudimos encontrar este administrador.' }); 
  }
  
  // 2. Validar si la contraseña es correcta
  const hashedPassword = adminLogged.password;
  let isCorrectPassword = false;
  try {
    isCorrectPassword = await argon2.verify(hashedPassword, passwordToTest);
  } catch(err) {
    console.error(`There was an error verifying password hash for ${email}`);
    return res.status(404).json({ message: 'Error al hacer login' })
  }

  if (!isCorrectPassword) {
    return res.status(403).json({ 
      message: 'Contraseña incorrecta', 
      code: 'auth/wrong-password'
    })
  }
  
  // 3. Crear un token de sesión
  let token = null;
  try {
    token = await createToken({ 
      id: adminLogged.id, 
      email: adminLogged.email 
    })
  } catch(err) {
    console.error(err);
    return res.status(404).json({ message: 'Error al hacer login' })
  }

  res.status(200).json({
    token,
    admin: {
      id: adminLogged.id,
      email: adminLogged.email,
      first_name: adminLogged.first_name,
      last_name: adminLogged.last_name
    }
  })
}

module.exports = {
  login
}