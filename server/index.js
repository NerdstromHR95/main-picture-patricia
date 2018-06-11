const express = require('express');
const path = require('path');
const db = require('../database-mysql');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.listen(3001, () => console.log('server is listening on port 3001'));

