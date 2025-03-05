CREATE DATABASE todo
CREATE TABLE subscribe( 
	subscribe_id uuid  PRIMARY KEY DEFAULT uuid_generate_v4(),
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) UNIQUE NOT NULL
);
INSERT INTO subscribe (first_name, last_name, email) VALUES(
	'Emmanuel',
	'Josept',
	'emmanuel@gmail.com'
);