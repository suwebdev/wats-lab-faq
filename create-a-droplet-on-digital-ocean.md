This FAQ answers the question "How to create a Digital Ocean droplet and provide SSH connection to Github?"

# Overall Process

Providing an SSH Connection to Github can be done either before or after creating the Digital Ocean \(DO\) droplet.  It turns out that it's easier to set up an SSH key in DO before creating the droplet than to manually add the SSH key to the DO droplet after creating it.  For that reason, I'll describe setting up the SSH Connection before describing setting up the droplet.

# Provide SSH Connection to Github

### Setup SSH Keys for the Account

Because the application that runs to setup a droplet prompts the user for an existing SSH key \(or keys\), it makes sense to set these keys up before attempting to create the droplet.

1. Start by creating SSH Keys on you local machine \(See the FAQ on Install Git Locally\)
2. Copy the public  SSH Key into your buffer `cat ~/.ssh/id_rsa.pub` and select and copy.
3. Open Digital Ocean in your browser and navigate to Account \| Security.  Then use the Add SSH Key form to add the public key to Digital Ocean.

The net effect of having an SSH Key uploaded to you DO account is that you will see it offered up when you are creating your droplet.

[Upload SSH Keys to Digital Ocean Account](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-account)

[How to Add SSH Keys](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys)

### How to Add an SSH Key Manually to an Existing Droplet

If you already have a droplet and you want to add an SSH key, you will need to do it manually.

1. On you local machine copy the key into the buffer `cat ~/.ssh/id_rsa.pub` and select and copy.
2. Launch the console from Digital Ocean dashboard and login using your DO login credentials.
3. Use `ls -la ~/.ssh/authorized_keys`to determine of the authorized _keys files exists.  If it doesn't create it with _`touch ~/.ssh/authorized_keys`
4. Use nano to edit the authorized\_keys file \(nano has copy/paste\) and paste the SSH key from your local machine into the authorized keys file and save.
5. Set permissions on the `authorized_keys` file to make it accessible   

```
chmod -R go= ~/.ssh
chown -R $USER:$USER ~/.ssh
```

![](/assets/Screen Shot 2019-01-16 at 10.13.07 AM.png)

![](/assets/Screen Shot 2019-01-16 at 10.13.44 AM.png)

\[Upload keys on an existing droplet\]\([https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-existing-droplet](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-existing-droplet)

## Create a Digital Ocean Droplet

Follow the step for creating a droplet in the link below.  Choose an Ubuntu images/1 GB memory/25 GB disk/San Francisco for your data center as it's the closest to Seattle.  You want the simplest images for your server as possible and it should only cost $5/month.  You don't need a back up or block storage.  If you uploaded an SSH key you should see it available when under "Add SSH key" and you should select it.    Then just click on create.  If you make a mistake just delete the image from the console and try it again.  Don't get attached to your server, especially when there's nothing on it.  Make note of the IP Address.

Once the image it created, go to your local machine and login using ssh.  Here's an example if your IP address is  `203.0.113.0`

`ssh root@203.0.113.0`

If your using a Mac you can do this from the terminal and if you're using Windows, I recommend doing it from Git Bash.

[Create droplet](https://www.digitalocean.com/docs/droplets/how-to/create/)

[Connect with SSH](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/)

