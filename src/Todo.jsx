import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState(['hi', 'yo', 'hello']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    function delTask(index) {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }

    function moveDown(index) {
        setTasks((prevTasks) => {
            if (index < prevTasks.length - 1) {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            }
            return prevTasks;
        });
    }

    function moveUp(index) {
        setTasks((prevTasks) => {
            if (index > 0) {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
                return updatedTasks;
            }
            return prevTasks;
        });
    }

    return (
        <div>
            <h1>TODO List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => delTask(index)}>Delete</button>
                        <button onClick={() => moveUp(index)}>Up</button>
                        <button onClick={() => moveDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Todo;
