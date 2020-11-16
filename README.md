# Todo-List 
### How to Todo
Create a folder and open the folder using Visual Studio Code.
Once the folder is opened create a new main.js file. 
Make use of the node require() function to load in file system module of Node.
`const fs = require('fs')` in main.js.
Add a todos.js file.
require() todo.js  onto main.js

### Requiring 3rd Party Modules 
First create a package.json file. We can easily do this by running the npm init command in the project root.
`npm init` in the terminal will present you with questions about the application you are building and heres how to answer.

name:(directory) todos-node
version: 1.0.0
description: 
entry point: (main.js)
test command: 
git repository:
keywords: 
author: <You>
license: (ISC)
About to write to c:nodepackage.json:

Is this ok? (yes) yes

This creates the package.json file in the project. With this file in place, we can start adding 3rd party modules. Start by adding the JavaScript utility library Lodash by typing the following at the command prompt.

npm install lodash --save

This command will update your package.json file automatically with the dependency just added. The npm software will pull from the servers and grab the software and place it into a new directory called node-modules

### Commands 
To add todos `node main.js addTodo --title="Call wife"` will add task to the object in todos.data.json 

To delete todos `node main.js deleteTodo --title="Call wife"` will delete the task from the object in todos.data.json

