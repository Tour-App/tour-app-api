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

// TODO 8 - Create place (Brenda)
// TODO 9 - Update place (Brenda)
// TODO 10 - Delete place (Brenda)
// TODO 11 - Get places (Brenda)
// TODO 12 - Get one place (Brenda)

// Stephano
// TODO 13 - Migración para tabla cities 
// TODO 14 - Crear el modelo para la entidad city

// TODO 15 - Create city 
// TODO 16 - Update city 
// TODO 17 - Delete city 
// TODO 18 - Get all city 
// TODO 19 - Get one city 

app.listen(PORT, () => console.log(`Èl servidor inicio en el puerto ${PORT}`))