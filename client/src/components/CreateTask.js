import React, { useState } from 'react';
import axios from 'axios';


// CreateTask component that takes a function addTaskToList as props
function CreateTask({addTaskToList}) {
    const [task, setTask] = useState('');


    // Function to handle form submission
    const onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            task: task,
            completed: false
        };

        // Post request to add a new task
        axios.post('http://localhost:8080/api/tasks', newTask)
            .then(res => {
                addTaskToList(res.data);
                setTask('')
            })
            .catch(err => console.log(err));

        
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        To-Do
                    </label>

                    { /* Input To-do Text */ }
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        required
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder='Cosa devi fare oggi?'
                    />
                </div>
                <div className="flex items-center justify-between">
                    <input
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Create Task"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateTask;