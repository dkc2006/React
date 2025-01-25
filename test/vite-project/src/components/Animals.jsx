import React from "react";

function Animals() {
  let animals = ["Cat", "Dog", "Horse", "Elephant"];
  return (
    // <div>
    //   <h1>{animals}</h1>
    // </div>
    <div>
      <ol>
        {animals.map((animal) => (
          <li>
            <h1>{animal}</h1>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Animals;
