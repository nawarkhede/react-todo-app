import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, deleteTodoItem }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.dueDate}
            deleteTodoItem={deleteTodoItem}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
