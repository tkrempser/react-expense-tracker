import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem amount={item.amount} date={item.date} title={item.title} />
      ))}
    </div>
  );
}

export default Expenses;
