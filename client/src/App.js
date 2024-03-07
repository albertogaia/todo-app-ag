import React, { useState, useEffect } from 'react';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import axios from 'axios';

function App() {
    // State hook for managing the list of tasks
    const [tasks, setTasks] = useState([]);


    const fetchTasks = () => {
        axios.get('http://localhost:8080/api/tasks')
          .then(response => {
            // Sort tasks by completion status and update timestamp
            const sortedTasks = response.data.sort((a, b) => {

              // If tasks have the same completion status, sort by updatedAt
              if (a.completed === b.completed) {
                return new Date(b.updatedAt) - new Date(a.updatedAt);
              }
              // Otherwise, sort uncompleted tasks first
              return a.completed ? 1 : -1;
            });
            setTasks(sortedTasks);
          })
          .catch(error => console.log(error));
    };

    // UseEffect hook to fetch tasks when the component mounts
    useEffect(() => {
        fetchTasks();
    }, []);

     // Function to add a new task to the list
    const addTaskToList = (newTask) => {
      // Update the tasks state to include the new task at the beginning
      setTasks(prevTasks => [newTask, ...prevTasks]);
    };

    return (
        <div className="App px-2">
            <CreateTask addTaskToList={addTaskToList} />
            <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </div>
    );
}

export default App;
