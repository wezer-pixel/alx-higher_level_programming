-- create user if none exist and grant all permissions
CREATE USER IF NOT EXISTS user_0d_1@localhost IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL ON *.* TO user_0d_1@localhost
