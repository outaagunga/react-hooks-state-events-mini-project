import React, { useState } from "react";

function CategoryFilter({ categs, onChangeCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categs.map((category) => (
        <button key={category} name={category.name} onClick={onChangeCategory}>
          {category}
        </button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
