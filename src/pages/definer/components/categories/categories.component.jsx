import React from "react";
import "./categories.styles.scss";

function Categories({ availableCategories, selectCategory, selectedCategory }) {
  return (
    <div className="categories-container">
      {availableCategories.map((category) => (
        <div
          onClick={() => selectCategory(category)}
          key={category.id}
          className={`category ${
            category.id === selectedCategory?.id ? "selected" : ""
          }`}
        >
          {category.icon()}
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
