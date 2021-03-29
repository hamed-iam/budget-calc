import React from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import NumberFormat from 'react-number-format';

function ExpenseItem({ expense, handleEdit, handleDelete }) {
  const { id, charge, amount } = expense;

  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">
            <NumberFormat
              value={amount}
              displayType={'text'}
              thousandSeparator={true}
            />{' '}
            ت
          </span>
        </div>
        <div>
          <button
            className="edit-btn"
            aria-label="edit button"
            onClick={() => handleEdit(id)}
          >
            <MdModeEdit />
          </button>
          <button
            className="clear-btn"
            aria-label="clear button"
            onClick={() => handleDelete(id)}
          >
            <RiDeleteBack2Fill />
          </button>
        </div>
      </li>
    </>
  );
}

export default ExpenseItem;
