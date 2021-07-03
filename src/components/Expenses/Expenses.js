import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectYearHandler = (selectedYearFromChild) => {
    setSelectedYear(selectedYearFromChild);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        amount={item.amount}
        date={item.date}
        title={item.title}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectYear={selectYearHandler}
        selectedYear={selectedYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
