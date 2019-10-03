DROP DATABASE IF EXISTS customers;

CREATE DATABASE customers;

USE customers;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address varchar(255) NOT NULL,
    phonenumber varchar(255) NOT NULL,
    creditcardnumber varchar(255) NOT NULL,
    expirationdate varchar(255) NOT NULL,
    cvv varchar(255) NOT NULL,
    billingcode varchar(255) NOT NULL,
    PRIMARY KEY ( id )
);