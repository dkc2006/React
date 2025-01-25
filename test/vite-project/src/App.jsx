// Importing the Hello and Bye components
import Hello from "./components/hello";
import Bye from "./components/Bye";
import Animals from "./components/Animals";
import Fruits from "./components/Fruits";

function App() {
  // Defining an array of seat numbers
  // const seatNumber = [1, 2, 3];

  // const person = {
  //   name: "John",
  //   phone: "123456",
  //   seatNumber: "123",
  // };

  return (
    <>
      {/* Example of a commented-out JSX element */}
      {/* <h1>Hello from App Component</h1> */}

      {/* Passing props to the Hello component */}
      {/* <Hello name = 'Deepanshu' phone = '123456' /> */}
      {/* Additional Hello components for testing multiple props */}
      {/* <Hello name = 'Khandelwal' phone = '1544656' />
      <Hello name = 'Rahul' phone = '12915628'/>
      <Hello name = 'Mike' phone = '1184486'/> */}

      {/* Passing an array (seatNumber) as a prop to the Hello component */}
      {/* <Hello name="Deepanshu" phone="123456" seatNumber={seatNumber} /> */}

      {/* <Hello person={person} /> */}
      {/* Rendering the Bye component (commented-out here) */}
      {/* <Bye /> */}
      {/* <Animals /> */}
      <Fruits />
    </>
  );
}

export default App;
