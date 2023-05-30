CREATE DATABASE todoapp;

CREATE TABLE todos(
   id VARCHAR(255) PRIMARY KEY,
   user_email VARCHAR(255),
   titel VARCHAR(30),
   progress INT,
   date VARCHAR(30)
);

CREATE TABLE users(
   email VARCHAR(255) PRIMARY KEY,
   hashed_password VARCHAR(255)
);