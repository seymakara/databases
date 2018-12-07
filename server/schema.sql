CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  objectId INT AUTO_INCREMENT,
  text TEXT,
  createdAt TIMESTAMP,
  username TEXT, 
  roomname TEXT,
  -- room_id INT NOT NULL,
  -- user_id INT NOT NULL,
  PRIMARY KEY (objectId)

    -- FOREIGN KEY fk_room (room_id)
    --   REFERENCES rooms(id)
    --   ON UPDATE CASCADE 
    --   ON DELETE CASCADE,

    -- FOREIGN KEY fk_user (user_id)
    --   REFERENCES users(id)
    --   ON UPDATE CASCADE 
    --   ON DELETE CASCADE
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

