import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = '스타벅스 아메리카노'
  const expenseAmount = 4500;
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item_description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item_price'>{expenseAmount}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
