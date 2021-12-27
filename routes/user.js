const express = require('express');
// const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();
const { validationId } = require('../middlewares/validation')


router.get("/users/login", async(req, res, next) => {
    const users = await User.find().select("firstName");
    res.json(users);
});

router.get("/", async(req, res, next) => {
    const users = await User.find().populate("firstName");
    res.json(users);
});

// router.post('/', async(req, res, next) => {
//     const user = req.body;
//     const newUser = User.create(user)
//         .then(data => res.json(data))
//         .catch(err => next(err));
// });
router.patch("/:id", validationId, async(req, res, next) => {
    const id = req.params.id;
    const user = req.body;

    await User.findByIdAndUpdate(id, user)
        .then((edit) => res.json("User Updated"))
        .catch((element) => next("Can't FInd This ID"));
});

router.post('/', async(req, res, next) => {
    const user = req.body;
    const newUser = User.create(user)
        .then(data => res.json(data))
        .catch(err => next(err));
});

router.delete('/:id', async(req, res, next) => {
    const { id } = req.params;
    const deleteMe = User.deleteOne({ _id: id }).exec()
        .then(data => res.json(data))
        .catch(err => next("id not found"));
});

// router.post('/login', async(req, res, next) => {
//         const { username, password } = req.body;
//         const safe = await login(username, password);
//     })
//             const isValid = bcrypt.compareSync(password, user, password)
//             console.log(isValid);
// router.post('/', async(req, res, next) => {
//     const user = req.body;
//     try {
//         const newUser = await User.create(user)
//         res.json(newUser)
//     } catch (err) {
//         next(err)
//     }

// });



module.exports = router;