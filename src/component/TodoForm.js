import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Input a todo"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
