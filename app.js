console.log('Running app.js');

const fs = require('fs');
const yargs = require('yargs');

const todos = require('./todos.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Running Command: ', command);

if (command === 'add') {
    todos.addTodo(argv.title);
} else if (command === 'delete') {
    var todoDeleted = todos.deleteTodo(argv.title);
    var message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
    console.log(message);
} else if (command === 'read') {
    var todo = todos.readTodo(argv.title);
    if (todo) {
        console.log('Great! The todo was found.');
        todos.logTodo(todo);
    } else {
        console.log('Whoops! The todo was not found.');
    }
} else if (command === 'list') {
    var allTodos = todos.listTodos();
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Invalid command.');
}