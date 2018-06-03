DROP DATABASE IF EXISTS nerdstrom;

CREATE DATABASE nerdstrom;

USE nerdstrom;

CREATE TABLE products (
  ID int NOT NULL,
  product_id int NOT NULL,
  product_type varchar(100) NOT NULL,
  picture_type varchar(50),
  color varchar(20) NOT NULL,
  img_url varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);


INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (0, 100, 'polo', 'front', 'white', 'https://ibb.co/bsAWsd');


