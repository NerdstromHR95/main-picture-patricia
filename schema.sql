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


INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (0, 100, 'polo', 'front', 'white', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/16/_12283756.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (1, 100, 'polo', 'back', 'white', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/11/_12283791.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (2, 100, 'polo', 'side', 'white', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/13/_12283813.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (3, 100, 'polo', 'collar', 'white', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/17/_12283777.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (4, 100, 'polo', 'fabrica', 'white', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/8/_12272768.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (5, 100, 'polo', 'product', 'white', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/5/_101841105.jpg?crop=pad&pad_color=FFF&format=jpeg&w=60&h=90');

INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (6, 100, 'polo', 'front', 'black', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/18/_12327418.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (7, 100, 'polo', 'back', 'black', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/5/_12327405.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (8, 100, 'polo', 'side', 'black', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/6/_12327406.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (9, 100, 'polo', 'collar', 'black', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/8/_12327408.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (10, 100, 'polo', 'fabrica', 'black', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/2/_12318242.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (11, 100, 'polo', 'product', 'black', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/16/_101963236.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');

INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (12, 100, 'polo', 'front', 'red', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/11/_12327391.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (13, 100, 'polo', 'back', 'red', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/0/_12327380.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (14, 100, 'polo', 'side', 'red', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_12327384.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (15, 100, 'polo', 'collar', 'red', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/5/_12327385.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');
INSERT INTO products (ID , product_id, product_type, picture_type, color, img_url) VALUES (16, 100, 'polo', 'fabrica', 'red', 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/8/_12318228.jpg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2547');