import React from 'react';
import Item from './ExpenseItem';
import { FaTrash } from 'react-icons/fa';

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          پاک کردن لیست
          <FaTrash className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
