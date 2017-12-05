# **New repository from existing local folder**

This assumes you have installed Git locally.

**Online**:

Go to you github account [https://github.com/&lt;account name&gt;](https://github.com) 

In the upper-right corner of any page, click the "+" icon and choose to 'New Repository'

Fill out the new repository name and give it a description in the New Repository form

Make note of the name of the repo 

**Local**: 

On Mac, open terminal and on Windows open Git Bash.

Follow instructions below substituting your account name and the repo you created above in the command.  

`cd` to the root of the folder you want to add to github

`git init`

```
git remote add origin 
```

```
git@github.com:<account name>/<exisisting remote repo>.git
git push -u origin master
```

  


