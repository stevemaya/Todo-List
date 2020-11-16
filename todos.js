console.log('Starting todos.js');

const fs = require('fs');

// add a todo item //
let addTodo = function (title) {
    let todos = fetchTodos();
    let todo = {
        title
    };

    let duplicatetodos = todos.filter((todo) => todo.title === title);

    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};

// delete a todo item //
let deleteTodo = (title) => {
    let todos = fetchTodos();
    let filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);

    return todos.length !== filteredtodos.length;
};

// utility functions
let fetchTodos = function () {
    try {
        let todosString = fs.readFileSync('todos-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

let saveTodos = function (todos) {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

// exported functions
module.exports = {
    addTodo,
    deleteTodo
};