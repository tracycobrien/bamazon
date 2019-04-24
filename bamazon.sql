DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (45, "boots", "hunter", 79.99, 20),
	   (29, "whips", "dressage", 99.99, 10),
	   (100, "helmet", "velvet", 29.99, 5),
	   (122, "saddle", "full contact", 129.99, 14),
	   (134, "pants", "jodhpur", 39.99, 15),
	   (899, "gloves", "leather", 19.99, 19),
	   (112, "bridle", "pony", 49.99, 11),
	   (999, "half chaps", "suede", 69.99, 10),
	   (876, "brush", "curry comb", 9.99, 19),
	   (345, "saddle bag", "pink", 89.99, 17),
	   (999,  "half chaps", "suede", 69.99, 10)