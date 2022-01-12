import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2565");
  const filterChangeHandler = (selcetedYear) => {
    setFilteredYear(selcetedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    const YearPlus543 = expense.expenseDate.getFullYear() + 543;
    return YearPlus543.toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
