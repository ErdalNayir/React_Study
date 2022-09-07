import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "./components/form";
import ListToDos from "./components/todoList";

export default function MainScreen() {
  const [whichSelected, setSelected] = useState("All");
  const [content, setContent] = useState([]);
  const [filtered, setFiltered] = useState(content);

  function onClickDestroy(event) {
    content.splice(event.target.name, 1);
    setContent([...content]);
  }

  function onClickFilter(event) {
    setSelected(event.target.textContent);
  }

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>Yapılacaklar</h1>
          <Form setTodos={setContent} todos={content}></Form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ListToDos
            todos={content}
            onDestroy={onClickDestroy}
            whichOne={whichSelected}
          ></ListToDos>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{content.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                className={whichSelected === "All" ? "selected" : ""}
                onClick={onClickFilter}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={whichSelected === "Active" ? "selected" : ""}
                onClick={onClickFilter}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={whichSelected === "Completed" ? "selected" : ""}
                onClick={onClickFilter}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    </div>
  );
}
