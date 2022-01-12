import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expenseDate, expenseTitle, expenseAmount } = props;
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">฿{expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
