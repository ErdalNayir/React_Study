import React, { Component, useState, useEffect } from "react";

const initialState = { name: "", isDone: false };

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState(initialState);

  function onSubmitHandler(event) {
    event.preventDefault();
    if (todo.name === "") {
      return false;
    }
    setTodos([...todos, todo]);
  }

  function onChangeHandler(event) {
    setTodo({ ...todo, name: event.target.value });
  }

  useEffect(() => setTodo(initialState), [todos]);

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className="new-todo"
        placeholder="Yapılcak işi girin"
        onChange={onChangeHandler}
        value={todo.name}
        autoFocus
      />
    </form>
  );
}
