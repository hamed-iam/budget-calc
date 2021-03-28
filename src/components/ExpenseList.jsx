import React from 'react';
import Item from './ExpenseItem';
import { FaTrash } from 'react-icons/fa';

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          پاک کردن لیست
          <FaTrash className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
