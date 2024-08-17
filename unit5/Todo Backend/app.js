const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let todos = [
    {
        "name": "School",
        "description": "Graduate from web development school",
        "imageUrl": "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "completed": false,
        "id": uuidv4()
    }
];

const findTodo = (id) => todos.find(todo => todo.id === id);
const sendNotFound = (res) => res.status(404).json({ message:'Todo not found'});

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// GET one todo by ID
app.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    let todo = findTodo(id);
    if (todo) {
        res.json(todo);
    } else {
        sendNotFound(res);
    }
});


// POST a new todo
app.post('/todos', (req, res) => {
    const { name, description, imageUrl, completed } = req.body;
    const newTodo = {
    name,
    description,
    imageUrl,
    completed,
    id: uuidv4()
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


// PUT a todo
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, image, completed } = req.body;
    let todo = findTodo(id);
    if (todo) {
        todo.name = name;
        todo.description = description;
        todo.imageUrl = image;
        todo.completed = completed;
        res.json(todo);
    } else {
        sendNotFound(res);
    }
});


// DELETE a todo
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).end();
});


app.listen(9000, () => console.log('Server running on port 9000'));