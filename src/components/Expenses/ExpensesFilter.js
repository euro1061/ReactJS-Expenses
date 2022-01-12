import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const { onChangeFilter, selected } = props
  const dropdownHandler = (e) => {
    onChangeFilter(e.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>ข้อมูลในปี</label>
        <select onChange={dropdownHandler} value={selected}>
          <option value='2565'>2565</option>
          <option value='2564'>2564</option>
          <option value='2563'>2563</option>
          <option value='2562'>2562</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;