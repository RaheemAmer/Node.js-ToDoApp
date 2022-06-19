const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
    },
    username: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    dob: Date,
    password: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform: (doc, ret, options) => {
            delete ret.password;
            delete ret.__v
            return ret;
        },
    }
});


userSchema.pre("save", function() {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
});

userSchema.methods.comparePassword = function(password) {
    const isValid = bcrypt.compareSync(password, this.password);
    return isValid
}

const User = mongoose.model('User', userSchema);


module.exports = User;