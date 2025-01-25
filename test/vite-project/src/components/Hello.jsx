// A functional component that receives a `person` object as a prop
function Hello({ person }) {
  // Uncommented examples of other approaches to display data
  // let text = "From React";
  // function displayName() {
  //   return "Deepanshu";
  // }

  return (
    <>
      {/* Examples of rendering content using JavaScript expressions */}
      {/* <h1>Hello from hello Component {10 + 50}</h1> */}
      {/* <h1>Hello from hello Component {text}</h1> */}
      {/* <h1>Hello from hello Component {displayName()}</h1> */}
      {/* <h1>Hello Deepanshu</h1> */}

      {/* Using the `person` object properties to display data */}
      <h1>
        Name: {person.name} <br />
        Phone: {person.phone} <br />
        Seat Number: {person.seatNumber}
      </h1>
    </>
  );
}

export default Hello;
