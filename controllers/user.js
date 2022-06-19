const jwt = require('jsonwebtoken');
const User = require("../models/user");
const create = (user) => User.create(user);
const findTarget = (req) => {
    return User.find({ _id: req.user._id.toString() }, { firstName: 1, _id: 0 });
};
const deleteTarget = (_id) => User.deleteOne({ _id });
const update = (_id, body) => User.updateOne({ _id }, body);
const login = async({ username, password }) => {
    const user = await User.findOne({ username }).exec(); // 1
    const isValid = await user.comparePassword(password); // 2
    if (!isValid) {
        throw new Error('UN_AUTH')
    }
    // 3
    // const { SECRET } = process.env
    const token = jwt.sign({
        username,
        _id: user.id,
        maxAge: '1d'
    }, 'afjhcvzjxhcvlydgfiuagf$%@#%Gsdkfgl23425SDFsdf')
    return token;
}

module.exports = { create, findTarget, deleteTarget, update, login };