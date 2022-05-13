const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
  throw new Error('No hay SECRET_KEY');
}

const createToken = (user) => new Promise((resolve, reject) => {
  // 1. Definir información a encriptar
  const payload = {
    id: user.id,
    email: user.email,
  } 

  // 2. Encriptar inforamación con llave secreta
  jwt.sign(payload, SECRET_KEY, (err, token) => {
    if (err) {
      reject(err);
    }
    resolve(token);
  })
})

module.exports = createToken;