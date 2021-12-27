const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

//const userSchema = new mongoose.Schema({
const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        unique: true,
        required: true,
        index: {
            unique: true
        },
        dropDups: true,
        minLength: 8,
    },

    password: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
        unique: true,
        required: true,
        minLength: 3,
        maxLength: 15,
    },
    lastName: {
        type: String,
        unique: true,
        required: true,
        minLength: 3,
        maxLength: 15,
    },

    dob: Date,
    required: false
}, {
    toJSON: {
        transform: (doc, ret, options) => {
            delete ret.password;
            delete ret.__v;
            return ret;
        },
    }
});

// profile: {
//     something: String,
//     somethingElse: String
//   }

//mongoos-middleware
// userSchema.pre('save', function() {
//     console.log(this);
//     const hash = bcrypt.hashSync(this.password, 8);
//     this.password = hash;
//     // return this
// });

// userSchema.methods.comparePassword = function(password) {
//     const isValid = bcrypt.compareSync(password, this.password);
//     return isValid;
// };




const User = mongoose.model("User", userSchema);

module.exports = User;