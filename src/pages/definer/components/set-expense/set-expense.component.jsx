import { Button } from "@material-ui/core";
import { InputNumber } from "antd";
import React from "react";
import { connect } from "react-redux";
import { updateCategoryValue } from "../../../../redux/definer/definer.actions";
import { setMonthlyExpenses } from "../../services/definer.servics";
import "./set-expense.styles.scss";

function SetExpense({
  selectedCategory,
  user,
  categories,
  updateCategoryValue,
}) {
  const { icon, categoryName, id, value } = selectedCategory;

  const setMonthlyExpensesValue = (value) => {
    setMonthlyExpenses(user, selectedCategory, value);
    updateCategoryValue(id, value);
  };

  return (
    <div className="set-expense">
      <span className="name">
        {icon()}
        {categoryName}
      </span>
      <InputNumber
        size="large"
        step={50}
        min={0}
        value={categories.find((cat) => cat.id === id).value || 0}
        formatter={(value) =>
          `₪ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        onChange={(val) => updateCategoryValue(id, val)}
      />

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => setMonthlyExpensesValue(value)}
      >
        Set monthly expense
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.definer.categories,
  selectedCategory: state.definer.selectedCategory,
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateCategoryValue: (id, value) => dispatch(updateCategoryValue(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetExpense);
