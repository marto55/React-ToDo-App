import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const completedTodosCount = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodosCount={completedTodosCount} totoalCount={todos.length}/>
    </div>
  );
}
