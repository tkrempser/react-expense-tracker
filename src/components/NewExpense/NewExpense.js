import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpenseHandler = (addedExpense) => {
    props.onAddExpense({ ...addedExpense, id: uuidv4() });
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
