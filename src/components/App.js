import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = tasks.filter(
    (task) => selectedCategory === "All" || task.category === selectedCategory
  );

  function handleCategoryClick(e) {
    setSelectedCategory(e.target.textContent);
  }

  function handleSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categs={CATEGORIES}
        onChangeCategory={handleCategoryClick}
        value={selectedCategory}
      />
      <NewTaskForm categs={CATEGORIES} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
