import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/definer/definer.actions";
import Categories from "./components/categories/categories.component";
import SetExpense from "./components/set-expense/set-expense.component";
import "./definer.styles.scss";

function Definer({ categories, selectedCategory, selectCategory }) {
  return (
    <div className="definer">
      <h1>Define yout desires monthly expenses</h1>
      <div className="categories">
        <Categories
          availableCategories={categories}
          selectCategory={selectCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      {selectedCategory ? (
        <SetExpense
          categotyName={selectedCategory.name}
          icon={selectedCategory.icon}
          currentValue={
            Math.random() < 0.85 ? Math.floor(Math.random() * 2000) : undefined
          }
        />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.definer.categories,
  selectedCategory: state.definer.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch(selectCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Definer);
