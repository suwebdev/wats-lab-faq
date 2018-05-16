This FAQ answer the question "How to add an admin user to Wordpress using mySQL?"

# Add Admin User to Wordpress using mySQL

Sign on the mySQL.  Digital Ocean provides the admin password to sign on into mySQL here: `/root/.digitalocean_password`

Copy the password into the buffer and paste after executing the following command:

`mysql -u root -p`

This will log you into mysql and you should see the 'mysql&gt;' prompt.

Change to the wordpress database by executing the following command:

`use wordpress;`

Note you can find all databases with the following command

`show databases;`

and all tables with this command

`show tables;`

Verify that you are in the wordpress database by executing show tables; and seeing the "wp\_" tables.

Then execute the following commands.  Replace the "&lt;&gt;" with the data you want.  Note that once the password is in the database it will be one-way encrypted with MD5 and you won't be able to see it in plain text.  Note that the ID cannot already exist so you may want to issues the \(``select * from `wordpress`.`wp_users`;``

to see what the current user ID's are and pick the next one\)

Use the same ID value in all 3 queries.  For example I'm using '4' in the queries below.

``INSERT INTO `wordpress`.`wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES ('4', 'demo', MD5('demo'), '<user nicename>', 'test@yourdomain.com','http://www.test.com/', '2018-04-17 00:00:00', '', '0', '<user display name>');``

``INSERT INTO `wordpress`.`wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES (NULL, '4', 'wp_capabilities', 'a:1:{s:13:"administrator";s:1:"1";}');``

``INSERT INTO `wordpress`.`wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES (NULL, '4', 'wp_user_level', '10’);``

A Web Reference: [http://www.wpbeginner.com/wp-tutorials/how-to-add-an-admin-user-to-the-wordpress-database-via-mysql/](http://www.wpbeginner.com/wp-tutorials/how-to-add-an-admin-user-to-the-wordpress-database-via-mysql/)

