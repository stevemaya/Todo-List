console.log('Running app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const todos = require('./todos.js');

const argv = yargs.argv;
const command = argv._[0];

console.log('Running Command: ', command);

if (command === 'addTodo') {
    todos.addTodo(argv.title);
} else if (command === 'deleteTodo') {
    let todoDeleted = todos.deleteTodo(argv.title);
    const message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
    console.log(message); 
} else {
    console.log('Invalid command.');
}