const DisplayTodo = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className="flex gap-4">
      {/* checkbox */}
      <input type="checkbox" onClick={() => toggleComplete(todo.id)} />

      {/*  DisplayTodo */}
      <div className={todo.completed && "line-through text-gray-500"}>{todo.text}</div>
      {/* // Edit Button */}
      <button className="text text-yellow-400">Edit</button>
      {/* // Delete Button */}
      <button className="text text-red-400" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default DisplayTodo;
