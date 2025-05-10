import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = function (input) {
    if (input === "" || todoList.some((t) => t.text === input)) return;
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };
  const toggleCompleted = function (id) {
    setTodoList((prev) =>
      prev.map((t) => {
        if (t.id === id) return { ...t, completed: !t.completed };
        else return t;
      })
    );
  };
  const deleteTodo = function (id) {
    setTodoList((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <div className="container">
      <div className="getData">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input.trim().toLowerCase())}>Add</button>
      </div>
      <ul className="todoList">
        {todoList.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strikeText" : ""}>{t.text}</span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
