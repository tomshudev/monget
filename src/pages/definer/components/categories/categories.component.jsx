import React from "react";
import "./categories.styles.scss";

function Categories({ availableCategories, selectCategory }) {
  return (
    <div className="categories-container">
      {availableCategories.map((category) => (
        <div
          onClick={() => selectCategory(category.id)}
          key={category.id}
          className={`category ${category.isSelected ? "selected" : ""}`}
        >
          {category.icon()}
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
