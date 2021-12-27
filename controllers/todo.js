const Todo = require("../models/todo");

const create = (todo) => Todo.create(todo);
const find = (todos) => Todo.find(todos);
const deleteData = (_id) => Todo.deleteOne({ _id });
const update = (_id, body) => Todo.updateOne({ _id }, { body });

module.exports = {
    create,
    find,
    deleteData,
    update
};