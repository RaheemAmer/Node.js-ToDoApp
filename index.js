const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");

const app = express();
mongoose.connect('mongodb://localhost:27017/project');

//parse whole
app.use(express.json());

//get todos - post and get
app.use('/todos', todoRoutes);

//get user - post and get
app.use('/users', userRoutes);

//better than get
app.use("*", (req, res, next) => {
    res.status(404).end()
})

app.use((err, req, res, next) => {
    res.status(500).json({ err });
})

app.listen(3000, () => {
    console.log('App is running on port: 3000')
})