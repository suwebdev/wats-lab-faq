This FAQ answers the question "How to create a Digital Ocean droplet and provide SSH connection to Github?"

# Overall Process

Providing an SSH Connection to Github can be done either before or after creating the Digital Ocean \(DO\) droplet.  It turns out that it's easier to set up an SSH key in DO before creating the droplet than to manually add the SSH key to the DO droplet after creating it.  For that reason, I'll describe setting up the SSH Connection before describing setting up the droplet.

# Provide SSH Connection to Github

### Setup SSH Keys for the Account

Because the application that runs to setup a droplet prompts the user for an existing SSH key \(or keys\), it makes sense to set these keys up before attempting to create the droplet.

1. Start by creating SSH Keys on you local machine \(See the FAQ on Install Git Locally\)
2. Copy the public  SSH Key into your buffer
3. Open Digital Ocean in your browser and navigate to Account \| Security.  Then use the Add SSH Key form to add the public key to Digital Ocean.

The net effect of having an SSH Key uploaded to you DO account is that you will see it offered up when you are creating your droplet.

\[Upload SSH Keys to Digital Ocean Account\]\(https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/to-account/\)

\[How to Add SSH Keys\]\([https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/\)\)

### How to Add an SSH Key Manually to an Existing Droplet

If you already ...  



## Create a Digital Ocean Droplet

## 



