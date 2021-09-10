import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      amount: 9.99,
      date: new Date(2021, 5, 22),
      title: "Book",
    },
    {
      id: "e2",
      amount: 39.49,
      date: new Date(2020, 5, 21),
      title: "Shirt",
    },
    {
      id: "e3",
      amount: 85.59,
      date: new Date(2021, 4, 8),
      title: "Electricity bill",
    },
  ]);

  const addExpenseHandler = (addedExpense) => {
    addedExpense["id"] = uuidv4();

    setExpenses((prevExpenses) => {
      return [addedExpense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
