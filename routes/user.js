const express = require("express");
const router = express.Router();
const authorizeUserMW = require("../middlewares/userMW ");
const {
    create,
    findTarget,
    deleteTarget,
    update,
    login
} = require("../controllers/user");
//https://www.youtube.com/playlist?list=PLkzDzmo9y3VG_pByjuxE7uuLYvmWgfBub
//https://github.com/ahmedemad3/nodejs-apps
router.get("/", async(req, res) => {
    findTarget(req)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

router.post("/", async(req, res, next) => {
    const user = req.body;
    create(user)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

router.post("/login", async(req, res, next) => {
    const { username, password } = req.body;
    const token = await login({ username, password });
    res.json(token);
});

router.post("/admin", async(req, res, next) => {
    const { username, password } = req.body;
    const token = await login({ username, password });
    res.json(token);
});

router.delete("/:id", async(req, res, next) => {
    const id = req.params.id;
    deleteTarget(id)
        .then((doc) => res.json(doc))
        .catch((e) => next(e));
});

router.patch("/:id", async(req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    update(id, body)
        .then((doc) =>
            res.json({ status: "edited", user: body })
        )
        .catch((e) => next(e));
});

module.exports = router;