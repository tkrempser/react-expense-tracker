import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpenseHandler = (addedExpense) => {
    props.onAddExpense(addedExpense);
    stopEditing();
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onAddExpense={addExpenseHandler} onCancel={stopEditing} />
      )}
    </div>
  );
};

export default NewExpense;
