const Todo = require("../models/todo");
const User = require("../models/user");

const create = (todo) => Todo.create(todo);
// const find = (query) => Todo.find(query);
//https://www.w3resource.com/mongodb/mongodb-skip-limit.php
//https://stackoverflow.com/questions/24160037/skip-and-limit-in-aggregation-framework
//https://www.mongodbtutorial.org/mongodb-crud/mongodb-limit/
//https://www.educba.com/mongodb-skip/
const find = (query, req) => {
    const queries = req.query;
    const limit = queries.limit ? queries.limit : 10;
    const skip = queries.skip ? queries.skip : 0;
    const id = req.user["_id"].toString();

    if (isSuper(id)) {
        return Todo.find({})
            .limit(+limit)
            .skip(+skip)
            .populate("user");
    }

    return Todo.find({ user: id })
        .limit(+limit)
        .skip(+skip)
        .populate("user");
}
async function isSuper(_id) {
    const user = await User.findOne({ _id });
    if (user.admin) {
        return true;
    }
    return false;
}
const update = (id, body) => Todo.updateOne({ id }, body);
const findTarget = (userId) => Todo.find({ user: userId }).populate("user");
const deleteTarget = (id) => {
    return Todo.deleteOne({ id });
};
module.exports = {
    create,
    find,
    deleteTarget,
    findTarget,
    update
}