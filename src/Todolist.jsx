import { useState } from 'react'
import './Todolist.css'

function TodoList(){
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])

    function addTask(){
        if (text.trim() === "") return;
 
        else {
            setTodos([...todos, text])
            setText("")
        }
    }

    function moveUp(index){
        if(index === 0){return}

        const updatedTasks = [...todos]

        let temp = updatedTasks[index - 1]
        updatedTasks[index - 1] = updatedTasks[index]
        updatedTasks[index] = temp

        setTodos(updatedTasks)
    }
    function moveDown(index){
        if(index === todos.length - 1){return}

        const updatedTasks = [...todos]

        let temp = updatedTasks[index + 1]
        updatedTasks[index + 1] = updatedTasks[index]
        updatedTasks[index] = temp

        setTodos(updatedTasks)
    }
    function deleteTask(index){
        setTodos(todos.filter((_,i) => i !== index))
    }
    return(
        <>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container border border-primary rounded p-5" style={{ maxWidth: "500px"}}>
                <h1 className="pb-3">Todo List app made by Liam</h1>
                <ul className="list-group" style={{border: todos.length > 0 ? "2px solid #3d66a4" : "none"}}>
                    {todos.map((task,index) => 
                    <li className="list-group-item" key={index}>
                        {task} 
                        <button className="btn btn-outline-danger btn-sm mx-2" onClick={() => deleteTask(index)}>X</button>
                        <button className="btn btn-outline-info btn-sm" onClick={() => moveUp(index)}>Up</button>                    
                        <button className="btn btn-outline-info btn-sm mx-2" onClick={() => moveDown(index)}>Down</button>                    
                    </li>)}
                </ul>
                <input className="form-control mt-4" style={{border: "2px solid #71808e"}} value={text} onChange={(e) => setText(e.target.value)}/>
                <button className="btn btn-primary ms-2 mt-2" onClick={addTask}>Add</button>
            </div>
        </div>
            
        </>
    )
}

export default TodoList