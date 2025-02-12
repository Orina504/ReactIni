CREATE DATABASE test;
\c test;
CREATE SEQUENCE user_id_seq START 1;
CREATE TABLE user_mst (
    id integer NOT NULL PRIMARY KEY DEFAULT nextval('user_id_seq'),
	name character varying(30) NOT NULL,
    password character varying(100) NOT NULL,
	created_date_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO user_mst (name, password) VALUES('test', 'test');