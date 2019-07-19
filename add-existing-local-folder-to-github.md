**This is the answer to "How to install create new Github repo from existing file folder?"**

# **New repository from existing local folder**

This assumes you have installed Git locally.

**Online**:

Go to your github account [https://github.com/&lt;account name&gt;](https://github.com)

In the upper-right corner of any page, click the "+" icon and choose to 'New Repository'

Fill out the new repository name and give it a description in the New Repository form

Make note of the name of the repo  

**Local**:

On Mac, open terminal and on Windows open Git Bash.

Follow instructions below substituting your account name and the repo you created above in the command.
`cd` to the root of the folder you want to add to github

Now follow these command.  You may or may not have to merge depending on if your local project has overwritten any of the file in the github.com repo.  

```bash
git init
git add .
git commit -m"adding local"
# fill in the reponame with whatever you named the new repo on github.com
# fill in the account with your github account name
# remove the mustaches
git remote add origin git@github.com:{{account}}/{{reponame}.git
git pull origin master --allow-unrelated-histories
# merge - if you have 2 files with different data you'll have to merge by removing
# any <<< or >>> lines from files that need merging
git add .
git commit -m"merge"
git push --set-upstream origin master
git push --set-upstream origin master
git pull
# should be up to date


```

