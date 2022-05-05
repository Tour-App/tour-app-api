const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('Server activo ✅');
})

app.listen(PORT, () => console.log(`Èl servidor inicio en el puerto ${PORT}`))