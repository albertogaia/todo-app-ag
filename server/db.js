const mongoose = require('mongoose');

module.exports = async() => {
    try {
        await mongoose.connect(
            "mongodb://localhost/todo-app-ag"
        );
        console.log('Connected to db');
    } catch (err) {
        console.log('Could not connect to db', err)
    }
}