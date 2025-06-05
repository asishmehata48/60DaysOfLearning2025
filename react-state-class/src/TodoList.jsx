import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>To-do List</h2>
            <div style={styles.inputContainer}>
                <input
                style={styles.input}
                placeholder = "add a task" 
                value={newTodo}
                onChange = {updateTodoValue}
                />
                <br></br>
                <button onClick={addNewTask} style={styles.button}>Add Task</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            
            <hr style={styles.hr}/> 
            <h4 style={styles.subheading}>Tasks added</h4>
            <ul style={styles.list}>
                {todos.map((todo, index) =>
                    <li key={index} style={styles.listItem}>{todo}</li>
                )}  
            </ul>
        </div>
    );
}