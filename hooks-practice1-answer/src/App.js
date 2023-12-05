import { useState } from 'react';
import './style.css';

function App() {

  // useState React hook is used to manage the state of data in a component
  // the state to manage here is a constant called 'counter' with a inital state of zero
  // setCounter is a named function returned by useState() to allow counter to be updated

  const [counter, setCounter] = useState(0)

  // incrementCount is an event listener that INCREMENTS the state of counter by 1
  // it is used by the button with className 'counter--plus' further below

  function incrementCount(){
    setCounter(counter+1) // here setCounter increases counter by 1
  }

  // decrementCount is an event listener that DECREASES the state of counter by 1
  // it is used by the button with className 'counter--minus' further below

  function decrementCount(){

    if(counter > 0)         // The condition allows counter to decrease by 1 till zero
      setCounter(counter-1) // here setCounter decreases counter by 1
  }

  // return the view (as HTML markup) for display
  return (
    <div className="counter">
      <button className="counter--minus" onClick={decrementCount}>–</button>
      <div className="counter--count">
        <h1>{counter}</h1> {/* Display the state counter, place it in curly braces {...} in your HTML markup */}
      </div>
      <button className="counter--plus" onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
