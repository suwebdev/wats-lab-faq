**This is the answer to "How to kill a process based on port number?"**



# Kill a process based on port number

If you close out VS Code with an active live-server running, it may keep the server process alive and you won't be able to create a new server, just by opening a new VS Code project.  

If you find yourself getting errors when trying to run live-server, you may need to kill an old process running in the background.  The command to do this vary depending on operating system interface.  Note that live-server run on port **5500 **by default.



# Windows DOS Commands

`netstat -ano | findstr :5500`

`taskkill /PID <process ID> /F`

![](/assets/dos-netstat.PNG)

# Windows Powershell Commands

`netstat -a -b -n -o`  
 `Stop-Process <pid>`

You can also run **resmon.exe** to find the process ID.  


# Mac OS X Commands

`lsof -i :5500`

`kill -0 <pid>`



