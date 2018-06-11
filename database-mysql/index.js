const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const getProductsFromDb = (callback) => {
  const q = 'SELECT img_url FROM products WHERE product_id LIKE 100';
  connection.query(q, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = getProductsFromDb;
