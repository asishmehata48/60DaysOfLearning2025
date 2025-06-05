import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState([{ text: "Sample Task", completed: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let markAsDone = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const styles = {
        container: {
            padding: "20px",
            width: "350px",
            maxWidth: "1000px",
            margin: "0 auto",
            fontFamily: "sans-serif",
            backgroundColor: "black",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            color: "white",
        },
        heading: {
            textAlign: "center"
        },
        inputContainer: {
            textAlign: "center"
        },
        input: {
            padding: "10px",
            width: "80%",
            border: "1px solid #ccc",
            borderRadius: "5px"
        },
        button: {
            padding: "10px 15px",
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
        },
        hr: {
            margin: "20px 0"
        },
        subheading: {
            textAlign: "center"
        },
        list: {
            listStyle: "none",
            padding: 0
        },
        listItem: {
            padding: "8px",
            borderBottom: "1px solid #ccc"
        },
        doneButton: {
            marginLeft: "10px",
            padding: "5px 10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>To-do List</h2>
            <div style={styles.inputContainer}>
                <input
                    style={styles.input}
                    placeholder="add a task"
                    value={newTodo}
                    onChange={updateTodoValue}
                />
                <br />
                <button onClick={addNewTask} style={styles.button}>Add Task</button>
            </div>

            <hr style={styles.hr} />
            <h4 style={styles.subheading}>Tasks added</h4>
            <ul style={styles.list}>
                {todos.map((todo, index) =>
                    <li key={index} style={styles.listItem}>
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "gray" : "white"
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => markAsDone(index)} style={styles.doneButton}>
                            {todo.completed ? "Undo" : "Done"}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}
