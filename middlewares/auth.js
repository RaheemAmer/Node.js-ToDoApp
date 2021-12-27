const jwt = require('jsonwebtoken');
const User = require('../models/user')

const auth = (req, res, next) => {
        const { authorization } = req.headers;
        const payload = jwt.verify(authorization, 'afjhcvzjxhcvlydgfiuagf$%@#%Gsdkfgl23425SDFsdf')
        User.findOne({ username: payload.username })
            .then(user => {
                req.user = user;
                next();
            });
    }
    /*
    https://www.youtube.com/watch?v=mbsmsi7l3r4
    https://www.youtube.com/watch?v=xBYr9DxDqyU
    https://www.youtube.com/watch?v=BDpWJocsp_w
    */
module.exports = auth;