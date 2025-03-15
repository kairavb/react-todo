import { useState } from "react"

function Todo(){
    const [tasks, setTasks] = useState(['hi', 'yo', 'hello'])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(e){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function delTask(index){
        const updateTask = tasks.filter((_, i) => i !== index)
        setTasks(updateTask)
    }

    function moveDown(index){
        if (index < tasks.length -1){
            const updatedTask = [...tasks]
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]] 
            setTasks(updatedTask)
        }
    }

    function moveUp(index){
        if (index>0){
            const updatedTask = [...tasks]
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]] 
            setTasks(updatedTask)
        }
    }

    return(<>
        <div>
            <h1>TODO List</h1>
            <div>
                <input type="text" placeholder="enter task" value={newTask} onChange={handleInputChange}/>
                <button onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index)=>
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={()=> delTask(index)}>delete</button>
                    <button onClick={()=> moveUp(index)}>up</button>
                    <button onClick={()=> moveDown(index)}>down</button>
                </li>
                )}
            </ol>
        </div></>)
}

export default Todo