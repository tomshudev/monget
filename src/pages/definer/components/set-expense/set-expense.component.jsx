import React from "react";
import "./set-expense.styles.scss";
import { InputNumber } from "antd";
import { Button } from "@material-ui/core";

function SetExpense({ categotyName, icon, currentValue }) {
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
      />

      <Button variant="contained" color="primary" disableElevation>
        Set monthly expense
      </Button>
    </div>
  );
}

export default SetExpense;
