const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the schema for a task document
const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // Automatically add 'createdAt' and 'updatedAt' fields
})

const Task = mongoose.model("task", taskSchema)

module.exports = Task;