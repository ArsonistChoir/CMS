DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE departments (
id INT NOT NULL,
department VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `role` (
id INT NOT NULL,
title VARCHAR(30) NOT NULL,
salary INT NOT NULL,
department_id INT,
PRIMARY KEY (id),
FOREIGN KEY (department_id)
REFERENCES departments(id)
ON DELETE SET NULL
);

CREATE TABLE employee (
id INT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
manager_id INT NOT NULL,
FOREIGN KEY (role_id)
REFERENCES `role`(id)
);