import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => (todo.name === item.name ? null : todo)));
  }
  function handleClick(item) {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={item.done ? styles.completed : ""}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
