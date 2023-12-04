import './App.css';

function App() {

  // useState: a react Hook that lets you add state(s) to a component
  // the App componet has a state that manages an Object with properties: first name and last name

  // Answer here:

  // handleChange is an event listener for the App() component
  // notice that it takes in a parameter called event (it can be named anything)

  // Answer here:

  // handleSubmit is also an event listener for the App() component

  // Answer here:

  // Finally, let's create an object that returns the values from the array object contactsData
  // We use the map function to destructure the values for rendering

  // Answer here:

  return (
    <div className="App">
      <form onSubmit={}>
          <input 
              placeholder="First Name"
              name="firstName" 
              value={}
              onChange={handleChange}
          />
          <input 
              placeholder="Last Name"
              name="lastName" 
              value={}
              onChange={handleChange}
          />
          <br />
          <button>Add contact</button>
      </form>
    </div>
  );
}

export default App;
