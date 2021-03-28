import React from 'react';
import { MdSend } from 'react-icons/md';
const ExpenseForm = ({
  charge,
  amount,
  handleAmount,
  handleCharge,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">عنوان</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="مثال: اجاره"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">مقدار</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="مثال: 500"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        ثبت
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
