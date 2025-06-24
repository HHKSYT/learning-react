import { useState } from 'react'
import './Todolist.css'

function TodoList(){
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const [editText, setEditText] = useState("")
    const [editIndex, setEditIndex] = useState(null)

    function addTask(e){
        e.preventDefault()

        if (text.trim() === "") return;
 
        else {
            setTodos([...todos, {text: text, completed: false}])
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
    function toggleComplete(index){
        const updated = [...todos];
        if (updated[index].completed === true) {
            updated[index].completed = false;
        } else {
            updated[index].completed = true;
        }   
        setTodos(updated)
    }

    function startEdit(index, currentText) {
        setEditIndex(index);
        setEditText(currentText)
    }
    function saveEdit(index){
        if (editText.trim() === "") return;
        const updated = [...todos]
        let taskToUpdate = updated[index]
        taskToUpdate.text = editText
        updated[index] = taskToUpdate
        setTodos(updated)
        setEditIndex(null)
    }
    function cancelEdit(){
        setEditIndex(null)
    }
    return(
        <>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container border border-primary rounded p-5" style={{ maxWidth: "500px"}}>
                <h1 className="pb-3">Todo List app made by Liam</h1>
                <ul className="list-group" style={{border: todos.length > 0 ? "2px solid #3d66a4" : "none"}}>
                    {todos.map((task,index) => 
                    <li className="list-group-item" key={index}>
                        {/* tick box */}
                        <div>
                            <button className="btn btn-sm me-2" onClick={() => toggleComplete(index)}>{task.completed ? (<i class="bi bi-check-square"></i>) : (<i class="bi bi-square"></i>)}</button>
                            {/* Editing part */}
                            {editIndex === index ? (
                                <input 
                                    type="text" 
                                    className="form-control form-control-sm mb-3" value={editText} 
                                    onChange={(e) => setEditText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") saveEdit(index)
                                            if (e.key === "Escape") cancelEdit()
                                    }}
                                    autofocus />
                            ) : (
                                <span style={{
                                    textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "#6c757d" : "inherit",
                                }}>
                                    {task.text}
                                </span>
                            )}
                        </div>
                        {/* check if tick box is ticked or not */}
                        {!task.completed && (
                            <div>
                                <button className="btn btn-outline-danger btn-sm mx-2" onClick={() => deleteTask(index)}>X</button>
                                <button className="btn btn-outline-info btn-sm" onClick={() => moveUp(index)}>Up</button>                    
                                <button className="btn btn-outline-info btn-sm mx-2" onClick={() => moveDown(index)}>Down</button> 
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => startEdit(index, task.text)}><i class="bi bi-pencil"></i></button>                  

                            </div>
                        )} 
                        {/* end of tick box */}
                    </li>)}
                </ul>
                <form onSubmit={addTask}>
                    <input className="form-control mt-4" style={{border: "2px solid #71808e"}} value={text} onChange={(e) => setText(e.target.value)}/>
                    <button className="btn btn-primary ms-2 mt-2" onClick={addTask}>Add</button>
                </form>
            </div>
        </div>
            
        </>
    )
}

export default TodoList