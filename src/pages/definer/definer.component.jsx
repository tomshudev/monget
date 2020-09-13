import React from "react";
import { connect } from "react-redux";
import {
  selectCategory,
  setCategories,
} from "../../redux/definer/definer.actions";
import Categories from "./components/categories/categories.component";
import SetExpense from "./components/set-expense/set-expense.component";
import "./definer.styles.scss";
import { getUserMonthlyExpenses } from "./services/definer.servics";

class Definer extends React.Component {
  componentDidUpdate() {
    const { user, setCategories } = this.props;

    if (user && !this.dataPolling) {
      getUserMonthlyExpenses(setCategories, selectCategory, user);
      this.dataPolling = setInterval(() => {
        getUserMonthlyExpenses(setCategories, user);
      }, 5000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.dataPolling);
  }

  render() {
    const { categories, selectedCategory, selectCategory } = this.props;

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
        {selectedCategory ? <SetExpense /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.definer.categories,
  selectedCategory: state.definer.selectedCategory,
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch(selectCategory(category)),
  setCategories: (categories) => dispatch(setCategories(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Definer);
