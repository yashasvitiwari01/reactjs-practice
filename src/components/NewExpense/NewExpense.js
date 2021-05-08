import React from "react";
import "./NewExpense.css";

function NewExpense() {
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense-form">
          <div className="new-expense-control">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="new-expense-control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="new-expense-control">
            <label>Date</label>
            <input type="date" min="01/01/2010" />
          </div>

          <div className="new-expense-control">
            <button>Update Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
