import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterData, setFilterData] = useState('2020');
  const dropdownChangeData = selectData => {
    setFilterData(selectData);
  }

  const filteredExpenses  = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterData;
  })
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterData} onDropdownChangeData={dropdownChangeData}/>
        {filteredExpenses.map( expense => 
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        )}
      </Card>
    </div>
  );
}

export default Expenses;