const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// In-memory storage for tasks
let tasks = [];
let currentId = 1;

// Routes
app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add', (req, res) => {
    const { task } = req.body;
    if (task.trim() !== '') {
        tasks.push({ id: currentId++, text: task, completed: false });
    }
    res.redirect('/');
});

app.get('/complete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
    }
    res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    res.render('edit', { task });
});

app.post('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { task } = req.body;
    const taskToUpdate = tasks.find(t => t.id === id);
    if (taskToUpdate) {
        taskToUpdate.text = task;
    }
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
