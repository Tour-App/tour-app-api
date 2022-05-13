const argon2 = require('argon2');
const { user } = require('../models');
const createToken = require('../utils/createToken');

async function login(req, res) {
  const { email, password: passwordToTest } = req.body;

  // 1. Validar si el usuario existe
  let userLogged = null;
  try {
    userLogged = await user.findOne({
      where: { 
        email
      }
    })
  } catch(err) {
    console.error(err);
    throw new Error() // TODO: Quitar error
  }

  if (!userLogged) {
    return res.status(404).json({ message: 'No pudimos encontrar este usuario' }); 
  }
  
  // 2. Validar si la contraseña es correcta
  const hashedPassword = userLogged.password;
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
      id: userLogged.id, 
      email: userLogged.email 
    })
  } catch(err) {
    console.error(err);
    return res.status(404).json({ message: 'Error al hacer login' })
  }

  res.status(200).json({
    token,
    user: {
      id: userLogged.id,
      email: userLogged.email,
      first_name: userLogged.first_name,
      last_name: userLogged.last_name
    }
  })
}

module.exports = {
  login
}