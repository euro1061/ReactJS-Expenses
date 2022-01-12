import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const { onSaveExpenseData } = props;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showAddExpense, setShowAddExpense] = useState(false);
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    }); */
    /* setUserInput((prevState)=>{
        return {
            ...prevState,
            enteredTitle: e.
        }
    }) */
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    }); */
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    }); */
  };

  const onClickShowExpense = () => {
    setShowAddExpense(true)
  }
  const onClickCloseExpense = () => {
    setShowAddExpense(false)
  }

  const sumbitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      expenseTitle: enteredTitle,
      expenseAmount: +enteredAmount,
      expenseDate: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  if(!showAddExpense){
    return <button onClick={onClickShowExpense}>เพิ่มรายการใหม่</button>
  }

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={onClickCloseExpense}>ปิด</button>
          <button type="submit">เพิ่มรายการ</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
