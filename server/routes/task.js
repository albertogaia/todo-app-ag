const Task = require('../models/task')
const express = require('express');
const router = express.Router();

// POST route to create a new task
router.post('/', async(req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (err) {
        res.send(err)
    }
})

// GET route to fetch all tasks
router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find().sort({completed: 1, createdAt: -1});
        res.send(tasks)
    } catch (err) {
        res.send(err)
    }
})

// PUT route to update the completion status of a task by its ID
router.put("/:id", async(req, res) => {
    Task.findById(req.params.id)
    .then(task => {
      task.completed = !task.completed;
      task.save()
        .then(() => res.json('Task updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})


// DELETE route to delete a task by its ID
router.delete("/:id", async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task)
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;