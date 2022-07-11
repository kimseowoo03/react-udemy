import { useState } from "react";

import './Expenses.css';
import ExpensesList from "./ExpensesList"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

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
        <ExpenseFilter
          selected={filterData}
          onDropdownChangeData={dropdownChangeData}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;