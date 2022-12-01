import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectYearHandler = (selectedYearFromChild) => {
    setSelectedYear(selectedYearFromChild);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectYear={selectYearHandler}
        selectedYear={selectedYear}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
