//DEmo for splitting components according to requirement and funtionality to make code look simple and clean

// Demo to use custom components as a wrapper around other content.

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "./Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      {/* Call the component to extract date   */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
