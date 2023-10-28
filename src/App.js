import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

import BUDGET from './components/BUDGET';
import Remaining from './components/remaining';
import Spent from './components/spent';
import ExpensesList from './components/ExpensesList';
import ExpenseItem from './components/ExpenseItem';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';
const App = () => {

  
  return (

    <AppProvider>

      <div className='container'>
        <h1 className='mt-3'>MY BUDGET PLANNER</h1>

        <div className='row mt-3' >
          <div className='col-sm justify-content-between '>
            <BUDGET />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>
        </div>
        <h3>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpensesList />

          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='mt-3'>
          <div className='col mt-3'>
            <AddExpense />

          </div>
        </div>

      </div>



    </AppProvider>


  );
};

export default App;
