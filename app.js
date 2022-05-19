const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5000;
const router = require('./server/routes');

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => res.send('Server activo ✅'));

app.use('/api', router);

app.listen(PORT, () => console.log(`Èl servidor inicio en el puerto ${PORT}`))