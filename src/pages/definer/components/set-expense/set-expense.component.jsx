import React from "react";
import "./set-expense.styles.scss";
import { InputNumber } from "antd";
import { Button } from "@material-ui/core";

function SetExpense({ categotyName, icon, currentValue, setMonthlyExpenses }) {
  let value = currentValue;

  return (
    <div className="set-expense">
      <span className="name">
        {icon()}
        {categotyName}
      </span>
      <InputNumber
        key={categotyName}
        size="large"
        step={50}
        min={0}
        defaultValue={currentValue || 0}
        formatter={(value) =>
          `₪ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        onChange={(val) => (value = val)}
      />

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => setMonthlyExpenses(value)}
      >
        Set monthly expense
      </Button>
    </div>
  );
}

export default SetExpense;
