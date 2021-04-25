//import the component to be used

import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    { id: "it1", title: "TV", amount: 90.34, date: new Date(2020,12,12) },
    {
      id: "it2",
      title: "Car Insurance",
      amount: 274.34,
      date: new Date(2021,1,2)
    },
    {
      id: "it3",
      title: "House Mortgage",
      amount: 800.12,
      date: new Date(2022,2,1)
    },
    {
      id: "it4",
      title: "Wooden Desk",
      amount: 50.00,
      date: new Date(2021,4,12)
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItems>
    </div>
  );
}

export default App;
