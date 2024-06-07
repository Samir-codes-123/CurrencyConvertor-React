import "./App.css";
import { useState } from "react"; // update UI using react

function App() {
  let [counter, setCounter] = useState(5); // hook
  //let counter = 5;
  const addValue = () => {
    // console.log("samir", counter);
    if (counter < 20) setCounter(++counter);
  };
  function removeValue() {
    if (counter > 0) setCounter(--counter);
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrese Value</button>
    </>
  );
}

export default App;
