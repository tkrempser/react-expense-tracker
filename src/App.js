import Expenses from "./components/Expenses";

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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
