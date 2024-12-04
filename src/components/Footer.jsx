import styles from "./footer.module.css";

export default function Footer({ completedTodosCount, totoalCount}) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed todos: {completedTodosCount}</span>
      <span className={styles.item}>Total todos: {totoalCount}</span>
    </div>
  );
}
