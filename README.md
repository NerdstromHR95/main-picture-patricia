
Photo View Module

Instructions:

1. Run npm install to install dependencies;

2. Install MySQL;

3. Create a config.js file for MySQL connection;

 const mysql = require('mysql');

  const connection = {
  user: 'yourusername',
  password: 'yourpassword',
  database: 'nerdstrom',
};

connection.connect();

3. from the root directory, run node server/index.js to start server.