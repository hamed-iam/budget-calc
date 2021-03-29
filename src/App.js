import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import uuid from 'uuid/v4';
import NumberFormat from 'react-number-format';
// const initialExpenses = [
//   { id: uuid(), charge: 'rent', amount: 1600 },
//   { id: uuid(), charge: 'car payment', amount: 400 },
//   {
//     id: uuid(),
//     charge: 'credit card bill ',
//     amount: 1200,
//   },
// ];

const initialExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];

function App() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // *********** functionality **************
  //add charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  // add amount
  const handleAmount = (e) => {
    let amount = e.target.value;
    if (amount === '') {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: 'ویرایش شد' });
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: 'success', text: 'اضافه شد' });
      }
      // set charge back to empty string
      setCharge('');
      // set amount back to zero
      setAmount('');
    } else {
      handleAlert({
        type: 'danger',
        text: `مقدار و عنوان نباید خالی باشد`,
      });
    }
  };
  // handle delete
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: 'danger', text: 'آیتم پاک شد' });
  };
  //clear all items
  const clearItems = () => {
    setExpenses([]);

    handleAlert({ type: 'danger', text: 'لیست پاک شد' });
  };
  // handle edit
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    console.log(expense);
    setCharge(expense.charge);
    setAmount(expense.amount);
    setEdit(true);
    setId(id);
  };
  const total = expenses.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>ماشین حساب بودجه</h1>
      <main className="App">
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        مجموع مخارج :
        <span className="total">
          <NumberFormat
            value={total}
            displayType={'text'}
            thousandSeparator={true}
          />{' '}
          تومان
        </span>
      </h1>
    </>
  );
}

export default App;
