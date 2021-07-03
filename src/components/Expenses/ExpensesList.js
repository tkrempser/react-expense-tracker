import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <li key={item.id}>
          <ExpenseItem
            key={item.id}
            amount={item.amount}
            date={item.date}
            title={item.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
