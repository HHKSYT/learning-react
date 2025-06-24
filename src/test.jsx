import { useState } from "react";

function Test() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  function addTask() {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  }

  function deleteTask(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function startEditing(index) {
    setEditingIndex(index);
    setEditedText(todos[index]);
  }

  function saveTask(index) {
    if (editedText.trim() === "") return;

    const updated = [...todos];
    updated[index] = editedText;
    setTodos(updated);

    setEditingIndex(null);
    setEditedText("");
  }

  return (
    <div>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveTask(index)}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => startEditing(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default Test;
