import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id:'c1',
    date: new Date(2021, 2, 12),
    description: 'Holodilnik',
    amount: 999.99
  },
  {
    id:'c2',
    date: new Date(2023, 10, 25),
    description: 'MacBook',
    amount: 1254.72
  },
  {
    id:'c3',
    date: new Date(2021, 4, 1),
    description: 'Jeans',
    amount: 49.99
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);
  

  // return React.createElement(
  // 'div', 
  // {}, 
  // React.createElement('h1', {}, 'React!'),
  // React.createElement(Costs, {costs: costs})
  // )

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
