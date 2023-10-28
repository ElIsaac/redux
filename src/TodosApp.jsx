import React, { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis/todosApi";

export const TodosApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data: todos = [], isLoading } = useGetTodosQuery(); //all todos
  const { data: todo = [], isLoading: isLoadingTodo } = useGetTodoQuery(todoId); //only one todo

  const next = () => {
    setTodoId(todoId + 1);
  };
  const prev = () => {
    if(todoId===1){return}
    setTodoId(todoId - 1);
  };

  return (
    <div>
      <h1>todos app</h1>
      <hr />
      

      <h2>get todo by id</h2>
      <hr />
      <p>
        <strong>{todo.id}: {todo.completed ? "DONE" : "PENDING"}</strong>: {todo.title}
      </p>
      <button disabled={isLoading} onClick={() => prev()}>prev todo</button>
      <button disabled={isLoading} onClick={() => next()}>next todo</button>

      <h2>all todos</h2>
      <hr />
      <h4>
        isLoading <span>{isLoading ? "si" : "no"}</span>
      </h4>

      <pre>...</pre>
      <ul>
        {todos.map((i) => (
          <li key={i.id}>
            <strong>{i.completed ? "DONE" : "PENDING"}</strong>: {i.title}
          </li>
        ))}
      </ul>
      <button>Next todo</button>
    </div>
  );
};
