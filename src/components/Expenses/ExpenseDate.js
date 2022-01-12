import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const { expenseDate } = props
  const month = expenseDate.toLocaleString('th-TH', { month : 'long'})
  const day = expenseDate.toLocaleString('th-TH', { day : '2-digit'})
  const year = expenseDate.getFullYear() + 543
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
