CREATE DATABASE jms;
use jms;

CREATE TABLE inmates (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(55),
  lastName VARCHAR(55),
  dateOfBirth VARCHAR(20),
  age VARCHAR(3),
  gender VARCHAR(10),
  height VARCHAR(4),
  bodyMarks VARCHAR(25),
  crime VARCHAR(255),
  sentenceStartDate VARCHAR(12), 
  sentenceEndDate VARCHAR(12), 
  cellNumber VARCHAR(20),
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  createdBy TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE visitors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(55),
  lastName VARCHAR(55),
  relationship VARCHAR(20),
  visitdate VARCHAR(10),
  visitTime VARCHAR(10),
  duration VARCHAR(15),
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  createdBy TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  email VARCHAR(50) ,
  password VARCHAR(255) DEFAULT NULL,
  refreshToken VARCHAR(500) DEFAULT NULL,
  token VARCHAR(1000) DEFAULT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  createdBy TIMESTAMP NOT NULL DEFAULT NOW()
);