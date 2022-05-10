const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()
const { User } = require('./server/models');

const PORT = process.env.PORT || 5000;
const router = require('./server/routes');

app.use(bodyParser.urlencoded({ exteded: false }));

app.get('/', (req, res) => {
  res.send('Server activo ✅');
})

app.use('/api', router);

app.listen(PORT, () => console.log(`Èl servidor inicio en el puerto ${PORT}`))