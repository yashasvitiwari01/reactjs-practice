//import the component to be used

import ExpensesList from "./components/ExpensesList";

function App() {
  const expenses = [
    { id: "it1", title: "TV", amount: 90.34, date: new Date(2020, 12, 12) },
    {
    id: "it2",
    title: "Car Insurance",
    amount: 274.34,
    date: new Date(2021, 1, 2),
    },
    {
    id: "it3",
    title: "House Mortgage",
    amount: 800.12,
    date: new Date(2022, 2, 1),
    },
    {
    id: "it4",
    title: "Wooden Desk",
    amount: 50.0,
    date: new Date(2021, 4, 12),
    },
];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesList items={expenses}/>  
    </div>
  );
}

export default App;
