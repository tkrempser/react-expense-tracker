import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const selectYearHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onSelectYear={selectYearHandler} />
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          amount={item.amount}
          date={item.date}
          title={item.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
