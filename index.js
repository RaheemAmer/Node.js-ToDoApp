const express = require('express');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');
const authMiddleware = require('./middlewares/auth')

const app = express();
process.env.SECRET = "afjhcvzjxhcvlydgfiuagf$%@#%Gsdkfgl23425SDFsdf";

mongoose.connect('mongodb://localhost:27017/Project');

app.use(express.json());
app.use('/users', userRoutes);
app.use(authMiddleware);
app.use('/todos', todosRoutes);
// app.set('views', './views');
// app.set('view engine', 'ejs');


// app.get('/ejs', (req, res, next) => {
//     res.render('todo', { user: { name: "ahmed" } })
// })


app.use('*', (req, res, next) => {
    res.status(404).end();
})
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(3000, () => {
    console.log('App is running on port: 3000');
})