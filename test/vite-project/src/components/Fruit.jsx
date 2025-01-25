// import React from "react";
//Conditional Rendering

// A functional component to display the name and price of a fruit
function Fruit({ name, price }) {
  return (
    // <li>
    //   {/* Displaying the name and price of the fruit */}
    //   The price of {name} is {price}
    // </li>
    <li>
      {price > 100 ? (
        <h3>
          The price of {name} is {price}
        </h3>
      ) : (
        ""
      )}
    </li>
  );
}

export default Fruit;
