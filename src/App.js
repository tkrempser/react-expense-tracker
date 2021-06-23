import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      amount: 9.99,
      date: new Date(2021, 5, 22),
      title: "Book",
    },
    {
      id: "e2",
      amount: 39.49,
      date: new Date(2021, 5, 21),
      title: "Shirt",
    },
    {
      id: "e3",
      amount: 85.59,
      date: new Date(2021, 4, 8),
      title: "Electricity bill",
    },
  ];

  return (
    <div className="App">
      <ExpenseItem
        amount={expenses[0].amount}
        date={expenses[0]["date"]}
        title={expenses[0].title}
      />
      <ExpenseItem
        amount={expenses[1].amount}
        date={expenses[1]["date"]}
        title={expenses[1].title}
      />
      <ExpenseItem
        amount={expenses[2].amount}
        date={expenses[2]["date"]}
        title={expenses[2].title}
      />
    </div>
  );
}

export default App;
