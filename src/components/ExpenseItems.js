//DEmo for splitting components according to requirement and funtionality to make code look simple and clean

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      {/* Call the component to extract date   */}
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
