// const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// const login = ({ username, password }) => {
//     const user = await User.find({ username }).exec();
//     const isValid = await user.comparePassword(password);
//     if (!isValid) {
//         throw new Error("unauthorized");
//     }
//     const token = jwt.sign({
//         username,
//         id: user.id,
//         maxAge: '2d',
//     }, 'dasdqweqiwgeh2312412gg1j24f14')
//     return token;
// }



// module.exports = {
//     login
// }
const User = require("../models/user");

const create = (user) => User.create(user);
const find = (users) => User.find(users);
const deleteData = (_id) => User.deleteOne({ _id });
const update = (_id, body) => User.updateOne({ _id }, { body });

module.exports = {
    create,
    find,
    deleteData,
    update
};