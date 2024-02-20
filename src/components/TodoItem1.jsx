function TodoItem1() {
  let todoName = "Milk (Sugaradded)";
  let todoDate = "12/12/2023";
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button">
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
