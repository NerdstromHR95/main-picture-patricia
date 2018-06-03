const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));


let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


