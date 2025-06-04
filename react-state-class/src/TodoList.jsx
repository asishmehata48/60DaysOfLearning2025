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
    let styles = {
    container: {
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f7f7f7",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
    },
    heading: {
        marginBottom: "20px",
        color: "#333",
    },
    inputContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        width: "70%",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 16px",
        fontSize: "16px",
        backgroundColor: "darkblue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    subheading: {
        marginBottom: "10px",
        color: "#555",
    },
    list: {
        listStyle: "none",
        padding: 0,
    },
    listItem: {
        backgroundColor: "#fff",         // white background
        color: "#000",                   // make sure text is visible
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        textAlign: "left",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    }
};
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