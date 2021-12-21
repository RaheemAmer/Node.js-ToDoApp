console.log('Starting todos.js');

const fs = require('fs');

// add a todo item //
var addTodo = (title) => {
    var todos = fetchTodos();
    var todo = {
        title
    };

    var duplicatetodos = todos.filter((todo) => todo.title === title);

    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};

// delete a todo item //
var deleteTodo = (title) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.title !== title);
    saveTodos(filteredtodos);

    return todos.length !== filteredtodos.length;
};

// read a todo item //
var readTodo = (title) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter((todo) => todo.title === title);
    return filteredTodos[0];
};

// list all todo items //
var listTodos = () => {
    return fetchTodos();
};

// utility functions
var fetchTodos = () => {
    try {
        var todosString = fs.readFileSync('todos-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

var logTodo = (todo) => {
    console.log('------');
    console.log(`It's title is: ${todo.title}`);
};

// exported functions
module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    logTodo
};