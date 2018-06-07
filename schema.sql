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




