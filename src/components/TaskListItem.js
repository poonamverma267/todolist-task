import "./TaskListItem.css";
import trash from "./UI/trash.svg";
import { useState } from "react";
const TaskListItem = (props) => {
  const [classes, setClasses] = useState(
    "position-absolute translate-middle start-50 top-50 fs-2"
  );

  const onCompleteItem = (event) => {
    const style =
      "position-absolute translate-middle start-50 top-50 fs-2 text-decoration-line-through";
    if (event.target.checked) {
      setClasses(style);
    } else
      setClasses("position-absolute translate-middle start-50 top-50 fs-2");
  };
  return (
    <li className="list-group-item">
      <input
        className="me-3 todo-check"
        type="checkbox"
        onChange={onCompleteItem}
      ></input>
      <span className={classes}>{props.task}</span>
      <img
        className="position-absolute end-0"
        src={trash}
        onClick={props.onDeleteItemTask}
        height="30rem"
        width="30rem"
      />
    </li>
  );
};

export default TaskListItem;
