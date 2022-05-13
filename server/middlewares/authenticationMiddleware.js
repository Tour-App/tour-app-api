const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
  throw new Error('No hay SECRET_KEY');
}
const { user } = require('../models');

function authenticationMiddleware(req, res, next) {
  // Validar que venga un token 
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ 
      code: 'auth/missing-auth-token',
      message: 'No hay token'
    });
  }

  // Validar que el token si sea el correcto 
  const [prefix, token] = authorization.split(' '); // "Bearer token"
  if (!token) {
    return res.status(401).json({ 
      code: 'auth/invalid-auth-token',
      message: 'Token inválido'
    });
  }
  if (prefix !== 'Bearer') {
    return res.status(401).json({ 
      code: 'auth/invalid-auth-token',
      message: 'Token inválido'
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, SECRET_KEY);
  } catch(err) {
    console.error(err);
    return res.status(500).json({ message: 'Error con jwt'});
  }

  console.log({ decoded })
  // Validar si el usuario existe
  const userLogged = user.findByPk(decoded.id);
  req.userLogged = userLogged
  // Validar el tipo de usuario (TODO)
  next();
}

module.exports = authenticationMiddleware;
