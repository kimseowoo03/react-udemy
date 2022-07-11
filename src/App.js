import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const  DUMMY_EXPENSES= [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    //동일한 상태의 이전 스냅샷을 기반으로 할 때 상태를 업데이트 할 수 있는 깔끔한 방법 
    setExpenses(prevExpenses => { 
      return [expense, ...prevExpenses]
    })
    //setExpenses([expense, ...expenses]);  비추천 방식
  }
  return (
    <div>
    <h1>Let's get started!</h1>
    <NewExpense onAddExpenseData={addExpenseHandler}/>
    <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
