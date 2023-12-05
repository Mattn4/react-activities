import './App.css';
import { useState } from 'react';

function App() {

  // useState react Hook that lets you add state(s) to a component
  // the App component has a state that manages an Object with properties: firstName and lastName

  const [inputData, setInputData] = useState({firstName: "", lastName: ""})
  const [contactsData, setContactsData] = useState([])

  // handleChange is an event listener for the App() component
  // notice that it takes in a parameter called event (it can be named anything)
  // and target is a property of the event object that refers to the element that triggered the event

  function handleChange(event) {

    // Note that object passed in is stored as a destructured OBJECT: name and value (curly braces)
    // where the name and value is returned by event.target
    const {name, value} = event.target

      // originalData is what we call a computed property
      // we need to destructure the existing state of inputData by
      // unwrapping the previous values before we update its key with the respective value
      
      setInputData(originalData => {
        return(
          {...originalData, [name]: value}
        )
      })

      // A shortened approach for line 27-31
      // setInputData(originalData => ({...originalData, [name]: value}))
  }

  // handleSubmit is also an event listener for the App() component
  function handleSubmit(event) {
    
    // prevents the page from refreshing, cancelling its default action
    event.preventDefault()

    // originalContact is what we call a computed property
    // we need to destructure the existing state of conactData by
    // unwrapping the previous values before we append ADDITIONAL elements to the array
      
    setContactsData(originalContact => {
      return(
        [...originalContact, inputData]
      )
    })
    
    // A shortened approach for line 47-51
    // setContactsData(originalContact=>([...originalContact, inputData]))

  }

  // Finally, let's create an object that returns the values from the array object contactsData
  // We use the map function to destructure the values for rendering
  const contacts = contactsData.map(contact=>
      <h1 key={contact.firstName + contact.lastName}>Hello, {contact.firstName} {contact.lastName}</h1>
  )

  // return the view (as HTML markup) for display
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          {/* The value of input firstName in curly braces {...} references the state of inputData.firstName  */}
          {/* Note that are reusing the name of the input firstName to update the key of inputData.firstName */}
          {/* Changes to input firstName is tracked by event listener handleChange */}
          <input 
              placeholder="First Name" 
              name="firstName"  
              value={inputData.firstName}
              onChange={handleChange}
          />
          {/* The value of input lastName in curly braces {...} references the state inputData.lastName  */}
          {/* Also, note that are reusing the name of the input lastName to update the key of inputData.lastName */}
          {/* Changes to input lastName is also tracked by event listener handleChange */}
          <input 
              placeholder="Last Name"
              name="lastName" 
              value={inputData.lastName}
              onChange={handleChange}
          />
          <br />
          <button>Add contact</button>
      </form>
      {contacts}
    </div>
  );
}

export default App;
