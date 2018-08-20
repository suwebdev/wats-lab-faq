This FAQ answer the question "How to add Bootstrap 4 to Vue.js project?"

# Bootstrap 4 and Vue.js

This document describes two ways to add Bootstrap 4 to a Vue.js project.  The first way is linking to CDN's in the index.html.  The second way is to use Vue-Bootstrap which will load into the apps main.js like a component.  If you use the CDN method, you can use standard bootstrap class names provided by the Bootstrap documentation. If you use the Vue-Bootstrap component, you'll use class names that are similar to standard Bootstrap, but are prefixed with "**b-**".

## Linking to CDN's

Linking to CDN's in a Vue.js project is similar to linking to them in any HTML5 document.  You'll follow the directions on the [Bootstrap home page](https://getbootstrap.com/docs/4.0/getting-started/introduction/) to add them to your **index.html** in the root of the application code.  There is one css link and three  JavaScript links.  Bootstrap 4 requires jquery and popper.js.

![](/assets/Screen Shot 2018-08-20 at 2.16.59 PM.png)

The code in your index.html will look something like this after you retrieve the links from the BS 4 homepage.

```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Hikes</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous">
  <link rel="icon" type="image/png" href="static/images/backpacker.png">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>
<body>
  <div id="app"></div>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
</body>

</html>
```

There is a [sample project](https://github.com/rebeccapeltz/hikes) deployed on github that uses the CDN approach.

Using Vue-Bootstrap

To use vue-bootstrap, you start by installing it from npm.  The [Vue-Bootstrap documentation](https://bootstrap-vue.js.org/docs/) provides these install instructions. You'll enter this npm command into your terminal.  Use the save option to record the package in your package.json file, so that future users of your code will pick it up when they `npm install`.

```
npm i bootstrap-vue --save
```

In your main.js file, add the following code to register the functionality provided by bootstrap as a Vue Component.

```
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
```



