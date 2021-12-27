const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();
const { validationId } = require('../middlewares/validation')

router.get("/", async(req, res, next) => {
    // const todos = await Promise.all
    const todos = await Todo.find().populate('user');
    // const todos = await Todo.find();
    res.json(todos);
});

// router.post('/', async(req, res, next) => {
//     const user = req.body;
//     const doc = User.create(todo)
//         .then(data => res.json(doc))
//         .catch(err => next(err));
// });
router.get("/:id", validationId, async(req, res, next) => {
    const id = req.params.id;
    const todo = await Todo.findById(id).populate('user');
    res.json(todo);
});

router.post('/', async(req, res, next) => {
    const todo = req.body;
    try {
        const doc = await Todo.create(todo);
        res.json(doc)
    } catch (err) {
        next(err)
    }

});

router.patch("/:id", validationId, async(req, res, next) => {
    const id = req.params.id;
    const todo = req.body;

    await Todo.findByIdAndUpdate(id, todo)
        .then((edit) => res.json("Updated"))
        .catch((element) => next("ID not found"));
});


router.delete("/:id", validationId, async(req, res, next) => {
    const id = req.params.id;
    await Todo.deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(err => next("ID not found"));
});
module.exports = router;



//The req. body object allows you to access data in a string or JSON object from the client side. You generally use the req. body object to receive data through POST and PUT requests in the Express server.