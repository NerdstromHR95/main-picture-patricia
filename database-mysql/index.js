const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

function getProductsFromDb(callback) {
  const q = 'SELECT img_url FROM products WHERE color LIKE "white"';
  connection.query(q, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

function getProductsFromDbByColor(color, callback) {
  const q = `SELECT img_url from products WHERE color LIKE "${color}" AND product_id LIKE 100`;
  connection.query(q, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}
module.exports = { getProductsFromDb, getProductsFromDbByColor };
