const validateTodo = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
        next('Error, title not found');
    }
    next();
}
const validationId = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    if (!id) {
        next('ID not found');
    }
    next()
}
module.exports = {
    validateTodo,
    validationId
}