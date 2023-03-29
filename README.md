# v2_solo_project
PostGres SQL commands for reference.
1. --for help                                          \?
2. --list database                                     \l
3. -- create database                                  CREATE DATABASE {databaseName};
4. -- connect to database                              \c {databaseName}
5. -- list of tables within database                   \d

BIGSERIAL; automatically increments our id
NOT NULL; first constraint. Means, we can't have a value of null

CREATE TABLE bathrooms (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  bathroom_of VARCHAR(75) NOT NULL,
  city VARCHAR(50) NOT NULL,
  description VARCHAR(500)
);


INSERT INTO bathrooms(id, bathroom_of, city, description) values (1,
'Camber', 'Bellingham', 'This is a description of my bathroom'
);

UPDATE -----> 
UPDATE bathrooms SET bathroom_of = 'Bobs Shrimp Shack', city =
'Miami', description = 'Needs to clean asap' WHERE id = 10 returning *;


CREATE TABLE bathrooms (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  bathroom_of VARCHAR(75) NOT NULL,
  city VARCHAR(50) NOT NULL,
  description VARCHAR(500)
);

INSERT INTO bathrooms(id, bathroom_of, city, description) values (1,
'Camber', 'Bellingham', 'This is a description of my bathroom'
);