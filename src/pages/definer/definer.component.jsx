import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/definer/definer.actions";
import Categories from "./components/categories/categories.component";
import SetExpense from "./components/set-expense/set-expense.component";
import { setMonthlyExpenses } from "./services/definer.servics";
import "./definer.styles.scss";

function Definer({ user, categories, selectedCategory, selectCategory }) {
  const setMonthltyExpensesValue = (value) => {
    setMonthlyExpenses(user, selectedCategory, value);
  };

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
          currentValue={selectedCategory.value ?? 0}
          setMonthlyExpenses={setMonthltyExpensesValue}
        />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.definer.categories,
  selectedCategory: state.definer.selectedCategory,
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch(selectCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Definer);
