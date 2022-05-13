
function authenticationMiddleware(req, res, next) {
  // Validar que venga un token 

  // Validar que el token si sea el correcto 

  // Validar el tipo de usuario
  next();
}

module.exports = authenticationMiddleware;
