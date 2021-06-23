import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem amount={item.amount} date={item.date} title={item.title} />
      ))}
    </Card>
  );
}

export default Expenses;
