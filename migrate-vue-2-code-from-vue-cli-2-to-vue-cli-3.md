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

## Migrate Code

The new file structure that CLI 3 is looking for is shown in the picture below.  Your goal will be to migrate your file structure to this new structure.

![](/assets/vue-cli-3-fs.png)

The changes to look for in this picture are:

* the router code is in a router.js file in the root instead of router/index.js
* there is a new `views` directory - in CLI 3 the best practice is to put components referenced in the router into the views directory and use the `components` directory for non-view components
* there is a `.gitkeep` file in the `components` directory and the `views` directory
* there some new config files - this document will provide the contents for these files, in particular `.babel.config.js`, `postcssrc.js`
* there a couple of config files that I created specifically to make migration easier to put production build code in the `docs` directory
* the `package.json` library dependencies has changed significantly and you'll want to replace the entire content of `package.json` with code provided in this document
* the `static` folder has been renamed to `public` and the index.html has moved into the `public` folder

NOTE: It's possible that the config code provided in this document may change. You can always generate the lates config code by running the new project `create` command to create a new project that will have all of the latest config code.  The project create command will not create the vue.config.js or the aliases.config.js as those are user created and I created them to allow for the use of the `@` symbol to specify `src` and to make the build create distributable files in the `docs` folder so that we can host on `github.io`.

To create a new project in Vue CLI 3 you can run the command below which will create a project called `hello-world`. Notice that the keyword has changed froom `init` to `create`. You should also pick the default babel/eslint.

```
vue create hello-world
```

See this page for instructions on creating a new project and note special instructions for Windows users that are using the `git bash` terminal: [https://cli.vuejs.org/guide/creating-a-project.html\#vue-create](https://cli.vuejs.org/guide/creating-a-project.html#vue-create).

The purposed of these migration instructions is that you shouldn't have to create a new project - you should be able to migrate the code by just adding config files and modifying the file structure.

## Migration Steps

Rename `static` to `public`

move `index.html` into `public`

create an `aliases.config.js` file and load it with the contents specified in this document.

delete `package-lock.json` file - this file will get automatically recreated when you run `npm install`

replace the contents of `package.json` with the code contents specified in this document

create a `router.js` file in the root of the project and move the contents of router/index.js into this file

create a `views` directory and move any files in the `components` directory that are reference in the router.js into the `views` directory

add an empty .gitkeep file to the `views` and `components` directory \(this is to keep them around even if empty\)

update links in `router.js` to point to files in the `views` direcory



