function TodoItem({ todoName, todoDate, deleteTodoItem }) {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => deleteTodoItem(todoName)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
