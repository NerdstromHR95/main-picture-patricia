
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

run the command on the terminal from your root directory: 

 mysql -uyourusername -p <schema.sql
 mysql -uyourusername -p

connection.connect();

3. from the root directory, run node server/index.js to start server.