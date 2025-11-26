import { useState } from "react";
import "./App.css";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    // check if inputText is empty
    if (inputText.trim() !== "") {
      // create a newTodo
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id))
  };

  return (
    <div className="flex gap-4 flex-col justify-center items-center min-h-screen">
      <div className="text-white">TODO: Build a Todo App</div>
      <div id="input-section" className="flex gap-4 border border-red-500 p-8">
        <input
          className="border border-teal-700 p-2 "
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new TODO"
        />
        <button className="border border-blue-700" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="border border-amber-400 min-h-8 min-w-80">
        {todos.length == 0 ? (
          <div>No Todos Yet!</div>
        ) : (
          <div>
            {todos.map((todo) => (
              <DisplayTodo key={todo.id} todo={todo} deleteTodo={deleteTodo}  />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
