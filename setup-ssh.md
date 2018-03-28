**This answers the question "How to setup SSH on a client \(local machine\)?"**

**SSH **is the acronym for "Secure Shell".  An SSH connection allows you to connects one node\(machine\) in a network to another without have to to enter a password.   The relationship between the two machines will follow a client server model.  The machine on which you type "ssh &lt;username&gt;@&lt;ip address" is the **client \(aka "local machine"\) **an the machine that you are trying to connect to is the **server \(aka "host machine"\)**.  The server always maintains the information about the username and password.   A machine may act as either client or server depending on whether the user is logged on to it or trying to connect ot it: if the user is already logged on to it, it is the client.

In order for a client to connect to a server using SSH, it must set up a  public key/private key pair.  The public key and private key provide the encryption needed for secure authentication and authorization.  An algorithm can verify that a give private key matches a given public key.  Both the public and private keys are stored on the client.  Before the client can connect to the server, the server must record the public key of the client in an file called **authorized\_keys **located in the **.ssh **directory under the home directory of the user on the server machine.  When the user issues the SSH command from the client machine the public key \(and proof that it has the matching private key\) is sent to the server.  If there is a match between the public key sent to the server and one of the keys in the **authorized\_keys **file, then a test is made on the client to see if the server is trusted. During ssh initialization the host send the client a host key.  The client checks the host key against entries in the **known\_hosts **file.  If the host key is not found a message pops up asking the user to verify the host.  Once verified the host key is added to the client's **known\_hosts **file.

For example if I want to issue the following command:  ssh bob@1.2.3.4, the following setup must exist on the the client and server machines.

![](/assets/ssh setup.png)

You can think of **authorized\_keys **as a file that helps the server trust the client and **known\_hosts **as a  file that helps the client trust the server.  The public key, **authorized\_keys **and **known\_hosts **files are all text files and the contents may be safely copy and pasted.  It is also possible to add a config file to the client .ssh directory and the **config **file can be used to map servers to different public/private key files if needed.  In general, SSH will look in the .ssh directory and try all keys if needed when attempted to authenticate.

A machine may contain both and **authorized\_keys **file and a **known\_hosts ** file because it can be operating in the either role at different times.

### 

### Setting up SSH on a Mac or Linux Client

###### Check to see if key files already exist because you don't want to replace them if they might already be in use.

`ls -la ~/.ssh/`

###### Look for `id_rsa`\_ \_and `id_rsa.pub`

###### Generate the key files

`ssh-keygen`

`Check that the key files have been properly generated`

`ls -la ~/.ssh/`

`Copy the public key to the buffer`

`cat ~/.ssh/id_rsa.pub`

###### Select contents of file from screen and `CTRL-c` to put in buffer

###### Use a text editor and paste the key into the **authorized\_keys **file on the server you wish to access.

### Setting up SSH on a Windows Client

If you are using Windows 10, you have 3 options for creating



