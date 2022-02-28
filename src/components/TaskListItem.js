import "./TaskListItem.css";
import trash from "./UI/trash.svg";
import { useState } from "react";
const TaskListItem = (props) => {
  const [classes, setClasses] = useState("");

  const onCompleteItem = (event) => {
    const style = "text-decoration-line-through";
    if (event.target.checked) {
      setClasses(style);
    } else setClasses("");
  };
  return (
    <li className="list-group-item">
      <input type="checkbox" onChange={onCompleteItem}></input>
      <p className={classes}>{props.task}</p>
      <img
        src={trash}
        onClick={props.onDeleteItemTask}
        height="30rem"
        width="30rem"
      />
    </li>
  );
};

export default TaskListItem;
