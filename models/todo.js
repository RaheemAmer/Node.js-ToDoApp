const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
    },
    status: {
        type: String,
        default: "to-do",
        enum: ["to-do", "done", "in progress"],
    },
    tags: {
        type: [{
            type: String,
            maxlength: 10,
        }, ],
    },
    id: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret, opts) => {
            delete ret._id;
            return ret;
        },
    },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;