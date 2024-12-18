// index.js
const express = require('express');
const itemsRoutes = require('./routes/items');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para parsear el cuerpo de las peticiones en formato JSON

app.use('/items', itemsRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = app; // Para que Vercel lo reconozca