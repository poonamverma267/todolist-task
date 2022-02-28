import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = (task) => {
  const [todoList, setList] = useState([]);

  const addTaskHandler = (taskItem) => {
    setList((prevList) => {
      return [taskItem, ...prevList];
    });
  };

  const deleteTaskHandler = (taskId) => {
    setList((prevList) => {
      prevList = prevList.filter((item) => item.id !== taskId);
      return prevList;
    });
  };
  return (
    <>
      <div className="container">
        <div className="card mt-5">
          <p className="card-header bg-dark text-white display-6">Todo List</p>
          <div className="card-body">
            <TaskForm onAddTask={addTaskHandler}></TaskForm>
            <TaskList
              items={todoList}
              onDeleteTask={deleteTaskHandler}
            ></TaskList>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
