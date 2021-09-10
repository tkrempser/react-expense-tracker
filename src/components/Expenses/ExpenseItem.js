import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price" onClick={clickHandler}>
          ${props.amount.toFixed(2)}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
