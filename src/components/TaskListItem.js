import "./TaskListItem.css";
import trash from "./UI/trash.svg";
const TaskListItem = (props) => {
  return (
    <li className="list-group-item">
      <input type="checkbox" onChange={props.onCompleteItem}></input>
      <p>{props.task}</p>
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
