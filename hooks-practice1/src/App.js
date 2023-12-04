import './style.css';

function App() {

  // useState that allows you to change a state called counter
  
  // Answer here:

  // update the state called counter, INCREASING counter by 1

  // Answer here:

  // update the state called counter, DECREASING counter by 1

  // Answer here:

  return (
    <div className="counter">
      <button className="counter--minus" onClick={}>–</button>
      <div className="counter--count">
          {/* We need to display the counter here */}
          <h1>0</h1>
      </div>
      <button className="counter--plus" onClick={}>+</button>
    </div>
  );
}

export default App;
