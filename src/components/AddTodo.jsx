import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
    console.log(event.target.value);
  };
  const handleDueDate = (event) => {
    setDueDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter text"
            onChange={(event) => handleTodoName(event)}
            value={todoName}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="Enter text"
            onChange={(event) => handleDueDate(event)}
            value={dueDate}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-button"
            onClick={() => {
              onNewItem(todoName, dueDate);
              setTodoName("");
              setDueDate("");
            }}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
