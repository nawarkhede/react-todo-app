import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [newTodoItems, setNewTodoItems] = useState([]);
  const handleNewItemClicked = (itemName, dueDate) => {
    const newCopyOfList = [
      ...newTodoItems,
      {
        name: itemName,
        dueDate: dueDate,
      },
    ];
    setNewTodoItems(newCopyOfList);
    console.log(`New item added ${itemName} ${dueDate}`);
  };

  const handleDeleteItemClicked = (todoItemName) => {
    const newCopyOfLIst = newTodoItems.filter(
      (item) => item.name !== todoItemName
    );
    setNewTodoItems(newCopyOfLIst);
    console.log(`item deleted clicked ${todoItemName} >>`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      {newTodoItems.length === 0 && <Error></Error>}

      <AddTodo onNewItem={handleNewItemClicked}></AddTodo>
      <TodoItems
        todoItems={newTodoItems}
        deleteTodoItem={handleDeleteItemClicked}
      ></TodoItems>
    </center>
  );
}

export default App;
