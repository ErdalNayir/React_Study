import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function ListToDos({ todos, onDestroy, whichOne }) {
  const [myList, setList] = useState([]);

  function onCheckedHandler(event) {
    if (event.target.checked) {
      todos[event.target.name].isDone = true;
      setList([...todos]);
    } else {
      todos[event.target.name].isDone = false;
      setList([...todos]);
    }
  }

  useEffect(() => {
    setList([...todos]);
  }, [todos, whichOne]);

  return (
    <ul className="todo-list">
      {myList.map((todo, index) => {
        if (whichOne === "All") {
          return (
            <li key={index} className={todo.isDone ? "completed" : ""}>
              <div className="view">
                <input
                  name={index}
                  className="toggle"
                  type="checkbox"
                  onClick={onCheckedHandler}
                  defaultChecked={todo.isDone ? true : false}
                />
                <label>{todo.name}</label>
                <button
                  name={index}
                  className="destroy"
                  onClick={onDestroy}
                ></button>
              </div>
            </li>
          );
        } else if (whichOne == "Completed" && todo.isDone) {
          return (
            <li key={index} className={todo.isDone ? "completed" : ""}>
              <div className="view">
                <input
                  name={index}
                  className="toggle"
                  type="checkbox"
                  onClick={onCheckedHandler}
                  defaultChecked={true}
                />
                <label>{todo.name}</label>
                <button
                  name={index}
                  className="destroy"
                  onClick={onDestroy}
                ></button>
              </div>
            </li>
          );
        } else if (whichOne == "Active" && todo.isDone === false) {
          return (
            <li key={index} className={todo.isDone ? "completed" : ""}>
              <div className="view">
                <input
                  name={index}
                  className="toggle"
                  type="checkbox"
                  onClick={onCheckedHandler}
                />
                <label>{todo.name}</label>
                <button
                  name={index}
                  className="destroy"
                  onClick={onDestroy}
                ></button>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}
