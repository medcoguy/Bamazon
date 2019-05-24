DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(5) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES 
('Delta 14 Kayak', 'Paddle', 1695.01, 6),
('Petzl Pirana Canyon Descender', 'Climb', 39.95, 12),
('Saloman XA Elevate shoes', 'Run', 64.83, 8),
('Osprey 85 AG Pack', 'Backpack', 247.99, 6),
('Salsa Claris 650 bike', 'Cycle', 949.99, 4),
('Bending Branches X-Grip paddle', 'Paddle', 63.89, 33),
('Patagonia Rainshadow Jacket', 'Backpack', 199.99, 10),
('Therm-a-Rest NeoAir Sleeping Pad', 'Backpack', 139.95, 25),
('NB Fresh Foam Vongo v2 Shoes', 'Run', 93.73, 40),
('Ortlieb Seat-Pack Saddle Bag', 'Cycle', 131.19, 12);