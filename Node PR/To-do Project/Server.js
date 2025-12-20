const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let allTodos = [];
let id = 1;

/* HOME */
app.get('/', (req, res) => {
    res.render('index', { allTodos });
});

/* ADD TODO */
app.post('/addTodo', (req, res) => {
    const { task, dueDate } = req.body;

    const newTodo = {
        Id: id++,
        task,
        dueDate,
        completed: false
    };

    allTodos.push(newTodo);
    res.redirect('/');
});

/* TOGGLE COMPLETE */
app.get('/toggleTodo', (req, res) => {
    const todoId = Number(req.query.Id);

    allTodos = allTodos.map(todo =>
        todo.Id === todoId
            ? { ...todo, completed: !todo.completed }
            : todo
    );

    res.redirect('/');
});

/* DELETE TODO */
app.get('/deleteTodo', (req, res) => {
    const todoId = Number(req.query.Id);
    allTodos = allTodos.filter(todo => todo.Id !== todoId);
    res.redirect('/');
});

/* EDIT PAGE */
app.get('/editTodo', (req, res) => {
    const todoId = Number(req.query.Id);
    const todo = allTodos.find(todo => todo.Id === todoId);

    if (!todo) return res.redirect('/');

    res.render('editTodo', { todo });
});

/* UPDATE TODO */
app.post('/updateTodo', (req, res) => {
    const { Id, task, dueDate } = req.body;

    allTodos = allTodos.map(todo =>
        todo.Id === Number(Id)
            ? { ...todo, task, dueDate }
            : todo
    );

    res.redirect('/');
});

/* SERVER */
app.listen(PORT, () => {
    console.log(`Server running`);
});
