const mongoose = require('mongoose');
const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};
// const todoSchema = new mongoose.Schema({
var todoSchema = new mongoose.Schema({
    todoId: {
        type: Number,
        default: 0,
        timestamps: true
    },
    title: {
        type: String,
        unique: true,
        required: true,
        timestamps: true

    },
    status: {
        type: String,
        default: ["to-do", "in progress", "done"],
        timestamps: true,
        maxLength: 15

    },
    date: {
        type: Date,
        default: Date.now,
        timestamps: true

    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }

});



const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
//     title: {
//         type: String,
//         validate: {
//             validator: function(valTitle) {
//                 return valTitle.includes("todo");
//             },
//             message: props => `${props.value} is not a valid todo!`
//         },
//         required: true,
//     },
//     status: {
//         type: String,
//         validate: {
//             validator: function(statusValue) {
//                 return statusValue.includes("todo");
//             },
//             message: props => `${props.value} is not a valid todo!`
//         },
//         required: true,
//     },
//     tags: {
//         type: String,
//         validate: {
//             validator: function(v) {
//                 return v.includes("todo");
//             },
//             message: props => `${props.value} is not a valid todo!`
//         },
//         required: false,
//     },
// });