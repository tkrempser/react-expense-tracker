import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 5, 22);
  const expenseTitle = "New book";
  const expensePrice = 19.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
