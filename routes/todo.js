const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

const {
    // create,
    find,
    deleteTarget,
    findTarget,
    update
} = require("../controllers/todo");

router.get("/", async(req, res, next) => {
    find({}, req)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

router.get("/:userId", (req, res, next) => {
    findByUser(req.params.userId)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

// router.post("/", async(req, res, next) => {
//     const database = await Todo.find({});
//     const length = database.length;
//     const todo = req.body;
//     todo.id = length + 1;
//     todo.user = req.user._id.toString();
//     create(todo)
//         .then((doc) => res.json(doc))
//         .catch((e) => next(e));
// });

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    deleteTarget(id)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

router.patch("/:id", (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    update(id, body)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

module.exports = router;