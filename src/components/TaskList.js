import { useState } from "react";
import TaskListItem from "./TaskListItem";

const TaskList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="todo-list__fallback">Add something to do!</h3>;
  }
  const deleteItemHandler = (id) => {
    props.onDeleteTask(id);
    //console.log(id);
  };

  const changeItemHandler = (id) => {};
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {props.items.map((toDoItem) => (
          <TaskListItem
            key={toDoItem.id}
            task={toDoItem.task}
            onDeleteItemTask={deleteItemHandler.bind(null, toDoItem.id)}
            onCompleteItem={changeItemHandler.bind(null, toDoItem.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
