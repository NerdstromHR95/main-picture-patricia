const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database-mysql/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/photo/*/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  const slice = req.url.slice('/photo/'.length, req.url.length).toLowerCase();
  const color = slice.split('/')[0];
  const id = Number(req.url.slice(`/photo/${color}/`.length, req.url.length));
  db.getProductsFromDbByColor(color, id, (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send(data);
    }
  });
});

app.get('/photo/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  const id = Number(req.url.slice(req.url.indexOf(typeof 'string') - 2));
  db.getProductsFromDb(id, (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send(data);
    }
  });
});


const PORT = 3001;
app.listen(PORT, () => console.log(`server is listening on: ${PORT}`));

