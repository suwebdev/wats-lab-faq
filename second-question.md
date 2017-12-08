**This is the answer to "How to set up Dev environment with Visual Studio Code?".**

# Install Visual Studio Code

Download and install VS Code using the link below.  Acc

[https://code.visualstudio.com/](https://code.visualstudio.com/)

# Plugins

Plugins provide additional functionality.

## Live-Server plugin

Live-Server will serve up web pages from your VS Code project to your default browser.  It runs an HTTP server as a background process on the 5500 port, which is a development port.

### To install:

Click on the Extensions icon located at the bottom of the left nav bar in the VS Code Application.

![](/assets/ext-icon.PNG)

Search for 'Live-Server' and click on the Green Install button.  

![](/assets/live-server-install.PNG)

After the Extension is loaded, click on the Blue Reload button to complete the installation.

![](/assets/live-server-reload.PNG)

Now you should see a **Go Live** button in the bottom status bar.  When you click on that, Live-Server will start and serve your **index.html**  file by default. 

![](/assets/go-live.PNG)Once the server has been started, the **Go Live **button will change to **Port: 5500 **which indicates that the server is running. The Go Live and Port:5500 buttons operate as a toggle. When you save changes in files that are being served, the server will automatically reserve the files. This will ensure that your browser is always running the latest saved changes.

![](/assets/go-live-port.PNG)

# User Settings

VS Code allows you to customize settings for all projects \(User Settings\) or for a single project \(Workspace settings\).  To modify default settings select Code \| Preference for the Mac or File \| Preferences for Windows.  You will see to files side by side.  On the left are the default settings and on the right are the User setting overrides.

&lt;pic&gt;

To change a default setting find the setting on the left and then copy it to the right with your desired setting.  For example, if you don't want to see the minimap on the right hand side of the application, you can make the following entry in the file on the right.

&lt;gif showing how to change settings&gt;

`{`

`"editor.minimap.enabled":false`

`}`

