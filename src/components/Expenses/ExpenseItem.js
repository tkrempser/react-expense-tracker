import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount.toFixed(2)}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
