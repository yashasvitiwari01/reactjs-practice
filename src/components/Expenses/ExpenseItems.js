//DEmo for splitting components according to requirement and funtionality to make code look simple and clean

// Demo to use custom components as a wrapper around other content.

// Demo for state!!!!!!!!!!!!!!!!1
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";

function ExpenseItems(props) {
  // a default initial value is passed to useState
  // the useState also returns something.
  // the first variable is the current state value and the second element is a function for updating that

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!");
  };

 
  return (
    <Card className="expense-item">
      {/* Call the component to extract date   */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change title</button>
      
    </Card>
  );
}

export default ExpenseItems;
