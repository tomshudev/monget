import React, { useState } from "react";
import Categories from "./components/categories/categories.component";
import SetExpense from "./components/set-expense/set-expense.component";
import "./definer.styles.scss";
import { IconsEnum, IconsNames } from "../../enums/icons.enum";

const CATEGORIES = [
  {
    name: "Restaurants",
    icon: IconsNames.CAKE,
  },
  {
    name: "Groceries",
    icon: IconsNames.CART,
  },
  {
    name: "Shopping",
    icon: IconsNames.SHOPPING_BAG,
  },
  {
    name: "Luxury",
    icon: IconsNames.LUXURY,
  },
  {
    name: "Regular Expenses",
    icon: IconsNames.REGULAR,
  },
];

function Definer() {
  const [categories, setCategories] = useState(
    [...Array(CATEGORIES.length).keys()].map((val) => ({
      id: val,
      name: CATEGORIES[val].name,
      icon: IconsEnum[CATEGORIES[val].icon],
      isSelected: false,
    }))
  );
  const [selectedCategory, setSelectedCategory] = useState(undefined);

  function selectCategory(categoryID) {
    let newCategories = [...categories].map((c) => ({
      ...c,
      isSelected: false,
    }));
    let category = newCategories.find((c) => c.id === categoryID);
    category.isSelected = true;

    setCategories(newCategories);
    setSelectedCategory(category);
  }

  return (
    <div className="definer">
      <h1>Define yout desires monthly expenses</h1>
      <div className="categories">
        <Categories
          availableCategories={categories}
          selectCategory={selectCategory}
        />
      </div>
      {selectedCategory ? (
        <SetExpense
          categotyName={selectedCategory.name}
          icon={selectedCategory.icon}
          currentValue={
            Math.random() < 0.7 ? Math.floor(Math.random() * 200) : undefined
          }
        />
      ) : null}
    </div>
  );
}

export default Definer;
