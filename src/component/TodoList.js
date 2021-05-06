import React, { useState } from "react";
import Typographsy from "@material-ui/core/Typography";
import TodoForm from "./TodoForm";
import { Todo } from "./Todo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };
  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <Typographsy variant="h2" component="h2">
        Todo List
      </Typographsy>
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoList;
