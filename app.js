const express = require('express');
const app = express();
require('dotenv').config()
const { User } = require('./server/models');
console.log(process.env)
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server activo ✅');
})

app.listen(PORT, () => console.log(`Èl servidor inicio en el puerto ${PORT}`))