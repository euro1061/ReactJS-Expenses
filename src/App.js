import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NexExpense/NewExpense";
const DUMMY_EXPENSE = [
  {
    expenseId: "e1",
    expenseTitle: "อาหารกลางวัน",
    expenseDate: new Date(2022, 1, 10),
    expenseAmount: 658.65,
  },
  {
    expenseId: "e2",
    expenseTitle: "ซื้อนาฬิกา",
    expenseDate: new Date(2021, 5, 9),
    expenseAmount: 446.12,
  },
  {
    expenseId: "e4",
    expenseTitle: "หมูแพงค่าแรงถูก",
    expenseDate: new Date(2020, 5, 8),
    expenseAmount: 446.12,
  },
  {
    expenseId: "e5",
    expenseTitle: "ปั่นจักรยาน",
    expenseDate: new Date(2022, 0, 6),
    expenseAmount: 346.12,
  },
  {
    expenseId: "e3",
    expenseTitle: "กระต่ายก็กินด้าน",
    expenseDate: new Date(2021, 1, 7),
    expenseAmount: 346.12,
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
