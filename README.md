php_shell
=========

this is a framework for the php run the shell command on the system
in this programe, you can visit a web to change the system time
normally, it should only be used in the internal environment

How to use
=========
* put the code to the web path
* make sure the web user like nginx has the excute authorication
* visit the index.php

How to configure
=========
* api.html & js/api.js
api.html control the buttons which you can see on the webpage
remember when add one button on the api.html, do the same on api.js in apiConfig

* index.php
this file control the button execute certain shell scripts

* scripts folder
this folder is where to put the shell script, in this case, it is a change time script

* add web user with the execute authorication
in this case, the web container use nginx and runs by user nginx

$ chmod 644 /etc/sudoers

add this confige to sudoers

$ nginx  ALL=(ALL)       NOPASSWD:ALL

$ chmod 400 /etc/sudoers


