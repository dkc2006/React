// Importing the Fruit component to render individual fruit details
import Fruit from "./Fruit";

function Fruits() {
  // Defining an array of fruits, each with a name and price
  const fruits = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 100 },
    { name: "Papaya", price: 150 },
    { name: "Pineapple", price: 200 },
  ];

  return (
    <div>
      {/* Displaying the main heading of the component */}
      <h1>Fruit List</h1>

      {/* Using an unordered list (<ul>) to display the list of fruits */}
      <ul>
        {/* Iterating over the fruits array using the map function */}
        {fruits.map((fruit) => (
          // Rendering the Fruit component for each fruit
          // Each Fruit component receives the fruit's name and price as props
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
