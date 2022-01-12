import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  const { expenses } = props;
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">ไม่มีรายการใด ๆ ในตอนนี้</h2>
  }
  return <ul className="expenses-list">
      {expenses.map((expense) => (
      <ExpenseItem
        key={expense.expenseId}
        expenseTitle={expense.expenseTitle}
        expenseDate={expense.expenseDate}
        expenseAmount={expense.expenseAmount}
      />
    ))}
  </ul>;
};
export default ExpensesList;
