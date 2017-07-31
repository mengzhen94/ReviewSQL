-- Alter TABLE

CREATE TABLE orders(
	id INT NOT NULL AUTO_INCREMENT,
	orderNumber INT,
	productId INT,
	customerId INT,
	orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY(customerId) REFERENCES customers(id),
	FOREIGN KEY(productId) REFERENCES products(id)
);

DELETE FROM customers
where id = '6';

UPDATE customers
SET email = 'test@gmail.com'
where id = 3

ALTER TABLE customers
DROP COLUMN tesCol;

ALTER TABLE customers
DROP COLUMN testCol;

ALTER TABLE customers
MODIFY COLUMN tesCol INT(11);

ALTER TABLE customers
MODIFY COLUMN testCol INT(11);

ALTER TABLE customers
ADD tesCol VARCHAR(255);

ALTER TABLE customers
ADD COLUMN age INT;

-- Query

INSERT INTO products (name, price) VALUES
('Product One', 10),
('Product Two', 5),
('Product Three', 15),
('Product Four', 30),
('Product Five', 6);

SELECT DISTINCT state From customers;
SELECT state From customers;

SELECT firstName, lastName From customers;
SELECT * From customers;

SELECT * From customers ORDER BY lastName DESC;
SELECT * From customers ORDER BY lastName;
SELECT * From customers
where id = 1;

SELECT * FROM customers
WHERE age
BETWEEN 22 AND 30;

SELECT * From customers
WHERE age < 30;

SELECT * FROM customers
WHERE city LIKE '%n';


-- Index

CREATE INDEX CIndex
ON customers(city);

DROP INDEX CIndex ON customers;

-- Joins

SELECT customers.firstName, customers.lastName, orders.id, orders.orderNumber
FROM customers INNER JOIN orders
on customers.id = orders.customerId
ORDER BY customers.lastName;

SELECT customers.firstName, customers.lastName, orders.orderNumber, orders.orderDate
FROM customers LEFT JOIN orders
on customers.id = orders.customerId
ORDER BY orders.orderNumber;


SELECT orders.orderNumber, customers.firstName, customers.lastName, products.name
FROM orders
INNER JOIN products ON orders.productId = products.id
INNER JOIN customers ON orders.customerId = customers.id
ORDER BY orders.orderNumber;

SELECT firstName as 'First Name', lastName as 'Last Name' FROM customers;

SELECT CONCAT(firstName, ' ', lastName) AS Name, CONCAT(address, ' ', city, ' ', state) AS Address FROM customers;

-- Aggregate

SELECT AVG(age) FROM customers;

SELECT age, COUNT(age) as Count FROM customers GROUP BY age;

SELECT age, COUNT(age) as Count FROM customers GROUP BY age HAVING Count > 1;

-- Others

SELECT UCASE(firstName) FROM customers;
