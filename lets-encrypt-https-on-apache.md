This FAQ answer the question "How to add Lets Encrypt to Apache on Digital Ocean Ubuntu 16.04?"

# Let's Encrypt: HTTPS on Apache

### Create a non root sudoer user

"**sammy**" is just an example of a user I have created on my server.

```
sudo usermod -aG sudo sammy
```

### Look Up Digital Ocean Docs

[https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-14-04](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-14-04)

Step  1: Execute steps to download and update the Let's Encrypt Client

Step 2: Execute steps to set up the SSL Certificate on just the Wordpress subdomain

I have installed Wordpress on my server and provided the domain name "wp", so I will just install the certificate on that subdomain.

```
 sudo certbot --apache -d wp.beckypeltz.online
```

I chose the redirect options.  This means if the user types [http://wp.beckypeltz.online](http://wp.beckypeltz.online), into the browser, I'll redirect to [https://wp.beckypeltz.online](https://wp.beckypeltz.online).  See the image below of this choice.

![](/assets/letencrypt.png)



