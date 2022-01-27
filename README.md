# Express

Express is a framework used to manage HTTP requests and routing along the website

## Installation

`npm i express`

## Dependencies

* **ejs** is the view engine to run javascript inside html

`npm i ejs`

* **nodemon** lets us re-run the server whenever without the need of stoping it and starting it again

`npm i --save-dev nodemon`

Add in package.json in scripts **"devStart" : "nodemon server.js"**

## File structure

* **server.js**
The file that instanciates the server using express.
It defines which methods of express it will use and manages the overall routing architecture.
Also defines the port.

* **public folder**
Contains index.html and other files meant to be accessed by the client.

* **routes folder**
Contains .js files that use express to manage routing of different sections of the website.

* **views folder**
Contains html/ejs files that render the website.


