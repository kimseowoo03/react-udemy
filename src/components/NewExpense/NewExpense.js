import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseData(expenseData);
    setIsEditing(false)
  }
  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  }
  return(
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} startEditingHandler={startEditingHandler}/>}
    </div>
  )
}

export default NewExpense;