// Demo for props object to pass/access values from one component to another

// Convert date into user readable format using toLocalestring method

import "./ExpenseItems.css";

function ExpenseItems(props) {

  const month = props.date.toLocaleString('en-US',{month:'long'});
  const year = props.date.toLocaleString('en-US',{year:'numeric'});
  const day = props.date.toLocaleString('en-US',{day:'numeric'});

  return (
    <div className="expense-item">
      {/* <div className="date">{props.date.toISOString()}</div> */}
      {/* Display date in calendar format */}


    <div className="date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>

    </div>



      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
