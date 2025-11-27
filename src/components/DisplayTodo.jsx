const DisplayTodo = ({
  todo,
  deleteTodo,
  toggleComplete,
  editTodo,
  editingId,
  editText,
  setEditText,
  startEdit,
}) => {
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
      {editingId == todo.id ? (
        <div>
          <input
            onChange={(e) => setEditText(e.target.value)} 
            value={editText} />
        </div>
      ) : (
        <div
          className={`flex-1 ${
            todo.completed ? "line-through text-gray-500" : "text-white"
          }`}
        >
          {todo.text}
        </div>
      )}

      {/* Action buttons */}
      
      {editingId == todo.id ? (<button
        onClick={() => editTodo(todo.id, editText)}
        className="text-yellow-400 hover:text-yellow-500"
      >
        Save
      </button>) : (
        <button
        onClick={() => startEdit(todo.id, todo.text)}
        className="text-yellow-400 hover:text-yellow-500"
      >
        Edit
      </button>
      )}
      
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
