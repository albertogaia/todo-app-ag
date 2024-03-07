import React from 'react';
import axios from 'axios';


// TaskList component that takes tasks and a fetchTasks function as props
function TaskList({tasks, fetchTasks}) {

    // Function to toggle the completion status of a task
    const toggleCompleted = (id, completed)=>{
        axios.put(`http://localhost:8080/api/tasks/${id}`, {completed: !completed})
        .then(response => {
            console.log(response.data);
            fetchTasks(); 
        })
        .catch(error => console.log(error));
    }

    // Function to delete a task
    const deleteTask = (id) => {
        axios.delete(`http://localhost:8080/api/tasks/${id}`)
          .then(() => {
            
            fetchTasks();
          })
          .catch(error => console.log(error));
    };


    

    return (
        <div className="max-w-md mx-auto mt-10">
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <div key={task._id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleCompleted(task._id, task.completed)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className={`ml-2 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                {task.task}
                            </span>
                        </div>
                        <button
                            onClick={() => deleteTask(task._id)}
                            className="text-white bg-red-500 hover:bg-red-700 font-semibold py-2 px-4 rounded-lg"
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-center mt-5">Nessuna task presente. Aggiungine una!</p>
            )}
        </div>

    );
}

export default TaskList;
