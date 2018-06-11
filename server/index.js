const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database-mysql/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/home', (req, res) => {
  db.getProductsFromDb((err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send(data);
    }
  });
});

app.post('/color*request', (req, res) => {
  const color = req.body.body.toLowerCase();
  db.getProductsFromDbByColor(color, (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send(data);
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`server is listening on: ${PORT}`));

