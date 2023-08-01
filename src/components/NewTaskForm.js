import React, { useState } from "react";

function NewTaskForm({ categs, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  function handleFormSubmit(e) {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("All");
  }

  return (
    <div className="new-task-form">
      <form onTaskFormSubmit={handleFormSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categs.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
