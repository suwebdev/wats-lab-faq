This is the answer to "How to install Git locally?".

Before you start this process, create an account on Github at[ ](https://github.com/)[https://github.com/](https://github.com/).

# Download and Install Git

[https://git-scm.com/downloads](https://git-scm.com/downloads)

This will install a Folder with a number of file and programs.

Open a bash window \(`terminal` on Mac or '`git bash`' on Windows\) and type in

`git --version`

This should return a confirmation that git is installed with a version number.

# Connect to your local workstation to Github with SSH

Without SSH connection setup you will have to enter your username and password every time you connect to Github, which you will usually have to do during a `git push`  command.  By sharing your workstation public key with Github, you will not have to provided username and password to connect.

Open a bash session \(`terminal` on Mac or '`git bash`' on Windows\).  All commands below should be entered into the bash session.

Check to see if you already have a private key/public key setup by listing any files in the hidden direction .ssh.

`ls -al ~/.ssh`

If you don't see any of the following files you will need to create  the key files

* id\_rsa.pub
* id\_dsa.pub
* id\_ecdsa.pub
* id\_ed25519.pub

# Create public key/private key files if they don't already exist

**You only need to do this step if you don't already have public/private key files.**

You ll first create the key files using the email you provided to Github.  This will label the keys with that  email.

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

`Generating public/private rsa key pair.`

Next you'll be prompted to enter a file name for your keys and you can just press enter to accept the default.

`Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]`

Finally, you'll be prompted to enter a passphrase.  This is a security feature and you will have to enter this passphrase when you connect to Github, so be sure to remember it.  It can be as simple as a four digit pin number.

`Enter passphrase (empty for no passphrase): [Type a passphrase]`

`Enter same passphrase again: [Type passphrase again]`

# Start SSH Agent and Add Keys

The SSH Agent is a process that will allow you to connect via SSH to Github.  You'll start that process and add your keys with the following commands.

[https://help.github.com/articles/connecting-to-github-with-ssh/](https://help.github.com/articles/connecting-to-github-with-ssh/)

[https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

