
const DisplayTodo = ({todo, deleteTodo}) => {
  return (
    <div className="flex gap-4">
      <div>{todo.text}</div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default DisplayTodo