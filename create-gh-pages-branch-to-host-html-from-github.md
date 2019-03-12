**This is the answer to "How to create gh-pages branch for Github hosting?"**

# Configure Repo for Github hosting

Github will host the web pages that you create in your Repos.  You can host code from the `master` branch or the `docs` branch depending on what you choose when configuring the settings. Any code in those branches will be hosted at an address that follows this pattern

`https://<account name>.github.io/<repo name>`

For example if my account name is `rebeccapeltz` and my repo name is `wats3010-hello-world` , and I have push my code to the master branch on my repo, I will find the index.html located in the root of the repo served up at this URL:

`https://rebeccapeltz.github.io/wats3010-hello-world`

You can configure hosting in the **gh-pages** sections of Settings tab. Scroll down to find the link to the hosted web pages. Chooes the **master** branch and check the **Enforce HTTPS** checkbox. The link will be in a blue area when first published. When the blue area turns green, you should be able to view the hosted code.

![](/assets/settings-gh-pages.png)

# Commands to push code to master branch

When you start working on a new repo you should be in the **master** branch.

From a bash terminal \(git bash on Window or terminal on Mac\)

Check which branch you're in

`git status`

The dot \(.\) indicates all files in this folder and below.

`git add <filename>` or `git add .`

`git commit -m"my comment message"`

`git push`





