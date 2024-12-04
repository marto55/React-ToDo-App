import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }
  return (
    <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        ></input>
        <button className={styles.todoButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
