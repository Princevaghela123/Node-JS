const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
let todos = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
// Home route - display all todos
app.get('/', (req, res) => {
  res.render('index', { todos });
});

// Add new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (task.trim() !== '') {
    todos.push({
      id: uuidv4(),
      task: task.trim(),
      completed: false,
      createdAt: new Date()
    });
  }
  res.redirect('/');
});

// Update todo status
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  res.redirect('/');
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== id);
  res.redirect('/');
});

// Edit todo page
app.get('/todos/:id/edit', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === id);
  res.render('edit', { todo });
});

// Update todo
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.task = task.trim();
  }
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
