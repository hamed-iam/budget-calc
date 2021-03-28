import React from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
function ExpenseItem({ expense }) {
  const { id, charge, amount } = expense;

  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">T {amount}</span>
        </div>
        <div>
          <button className="edit-btn" aria-label="edit button">
            <MdModeEdit />
          </button>
          <button className="clear-btn" aria-label="clear button">
            <RiDeleteBack2Fill />
          </button>
        </div>
      </li>
    </>
  );
}

export default ExpenseItem;
