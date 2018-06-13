const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

function getProductsFromDb(id, callback) {
  const q = `SELECT img_url FROM products WHERE product_id LIKE "${id}" AND color LIKE "white"`;
  connection.query(q, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

function getProductsFromDbByColor(color, id, callback) {
  const q = `SELECT img_url from products WHERE color LIKE "${color}" AND product_id LIKE "${id}"`;
  connection.query(q, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}
module.exports = { getProductsFromDb, getProductsFromDbByColor };
