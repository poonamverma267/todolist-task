import { useRef } from "react";

const TaskForm = (props) => {
  const todoTaskRef = useRef();

  const SubmitFormHandler = (event) => {
    event.preventDefault();
    const todoTask = {
      task: todoTaskRef.current.value,
      id: "t" + Math.floor(Math.random() * 100).toString(),
    };

    props.onAddTask(todoTask);
    todoTaskRef.current.value = "";
  };
  return (
    <div className="row">
      <div className="col-6">
        <h2>ToDo List</h2>
        <form className="px-3" onSubmit={SubmitFormHandler}>
          <input
            type="text"
            maxLength="50"
            placeholder="New Task"
            ref={todoTaskRef}
            className="me-2 ms-4 fs-3"
          />
          <button type="submit" className="btn-primary fs-3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default TaskForm;
