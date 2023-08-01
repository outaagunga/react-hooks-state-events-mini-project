import React from "react";

function Task({ text, category }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}
// <ul>{tasks.map((task) => <li>{task.text}</li>)}</ul>

export default Task;
