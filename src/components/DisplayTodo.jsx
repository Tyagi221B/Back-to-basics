const DisplayTodo = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className="flex gap-4 items-center">
      {/* Checkbox to toggle completion */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="cursor-pointer"
      />

      {/* Todo text with conditional styling */}
      <div
        className={`flex-1 ${
          todo.completed ? "line-through text-gray-500" : "text-white"
        }`}
      >
        {todo.text}
      </div>

      {/* Action buttons */}
      <button className="text-yellow-400 hover:text-yellow-500">Edit</button>
      <button
        className="text-red-400 hover:text-red-500"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default DisplayTodo;
