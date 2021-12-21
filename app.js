// call file system using module require 
const FS = require("fs");

// get the Index - (node app.js order)
const order = process.argv[2];


//Create
if (order === 'create') {
    const todo = process.argv[3];

    if (!todo) {
        console.log("Invalid Input , You Must Enter Some Data");
    } else {
        const todos = JSON.parse(FS.readFileSync('list.json', { encoding: 'UTF-8' }));
        todos.push({ todo, id: todos.length + 1 });
        FS.writeFileSync('list.json', JSON.stringify(todos));
    }
}

//List
else if (order === 'list') {
    const todos = JSON.parse(FS.readFileSync('list.json', { encoding: "utf-8" }));
    console.log(todos);
}


//Update
else if (order === 'update') {
    const id = process.argv[3];
    const newData = process.argv[4];
    const todos = JSON.parse(FS.readFileSync('list.json', { encoding: "utf-8" }));

    if (!(id <= todos.length)) {
        console.log("Can't Find This ID");
    } else {
        const todo = todos.find(f => f.id === +id);
        todo.todo = newData;
        FS.writeFileSync('list.json', JSON.stringify(todos));
        console.log("Update Done");
    }
}

//Delete
else if (order === 'delete') {
    const id = process.argv[3];
    const newData = process.argv[4];
    const todos = JSON.parse(FS.readFileSync('list.json', { encoding: "utf-8" }));

    if (!(id <= todos.length)) {
        console.log("Can't Find This ID ");
    } else {
        //  Ask how with Filter()
        const todo = todos.splice(id - 1, 1);
        todo.todo = newData;
        FS.writeFileSync('list.json', JSON.stringify(todos));
        console.log("Item Deleted");
    }
}