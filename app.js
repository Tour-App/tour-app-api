const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5000;
const router = require('./server/routes');

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => {
  res.send('Server activo ✅');
})

app.use('/api', router);

// TODO 6 - Migración para la tabla places
// TODO 7 - Crear el modelo para la entidad place
// TODO 8 - Create place
// TODO 9 - Update place
// TODO 10 - Delete place
// TODO 11 - Get places
// TODO 12 - Get one place

app.listen(PORT, () => console.log(`Èl servidor inicio en el puerto ${PORT}`))