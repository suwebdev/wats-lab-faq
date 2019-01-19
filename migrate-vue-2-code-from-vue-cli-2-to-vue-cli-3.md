This FAQ answers the question "How to migrate Vue 2 code from Vue CLI 2 to Vue CLI 3?"

# Migrate Vue 2 Code From Vue CLI 2 to Vue CLI 3

Vue.js has rearchitected the way that you build the Vue.js 2 code.  It's important to discern the difference between the way that you code Vue.js and the way that you build Vue.js.  Vue.js released an new version of the CLI \(the command line interface for building Vue.js code in to Vanilla JavaScript and CSS\) in 2017.  The versioning moved from 2 to 3.

It is not necessary to upgrade the Vue.js 2 code, but if you want to continue to develop in Vue.js you should upgrade the CLI to version 3.  There are a number of important architecture changes to the way that a project is configured and architected in CLI 3.  It is not necessary to modify your code to make this move.  The changes required involved moving new configuration files and changes to the file structure \(where your code is stored\).

This document outlines a process to migrate your code repo and add new config files so that it can take advantage of the CLI 3.

## Upgrade Node

The first step should be to make sure you're using the latest version of node and npm.  This can be done by executing the global install command. This command will update node and npm.

`npm install -g node`

If you're on a Mac, depending on how you installed node, you made need to use the `sudo` command for permission to do this upgrade.

`sudo npm install -g node`

Its always a good idea to check your upgrade by checking versions.

```
npm --version
node --version
```

## Upgrade Vue CLI

To upgrade Vue CLI you can follow instructions on this page: [https://cli.vuejs.org/guide/installation.html](https://cli.vuejs.org/guide/installation.html)

If you have Vue 2 CLI installed you need to uninstall it.

```
npm uninstall vue-cli -g
```

The command to install CLI 3 is

```
npm install -g @vue/cli
```

Then verify the version

```
vue --version
```

As of this writing, the current version is **3.3.0**, but there is a lot of development taking place with Vue.js and this may not be the version that you get.  Your major version \(the first number should at least be a **3**\).

Migrate Code

The new file structure that CLI 3 is looking for is shown in the picture below.  Your goal will be to migrate your file structure to this new structure.  



