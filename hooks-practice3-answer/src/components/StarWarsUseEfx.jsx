import React, { useEffect } from 'react'

export default function StarWarsUseEfx() {

  /**
   * Challenge: Have a button "Get Next Star Wars Character" 
   * that will get a new character from the Star Wars API.
   */

  const [title, setTitle] = React.useState("")                // Q: Initialize state to manage a page title of String
  const [starWarsData, setStarWarsData] = React.useState({})  // Q: Initialize state to manage JSON data (Star Wars Data)
  const [count, setCount] = React.useState(0)                 // Q: Initialize state to manage the count of Integer
  
  const [buttonDisplay, setButtonDisplay] = React.useState("Get Your First Character")
  const [updating, setUpdating] = React.useState(false)       // Q: Initialise state to manage the updateStatus of the component

  // Since react 16.8, useEffect hook was introduced 
  // to track changes and render updates to a component

  // Q: Add a useEffect Hook to display title: "Welcome Padawans" when the page loads
  // ComponentDidMount
  useEffect(()=>{
    if(count === 0){
      setTitle("Welcome Padawans!!")
    }
  },[])
    
  // Q: Add a useEffect Hook to fetch a Star Wars profile when count is updated
  useEffect(() => {
    if(count > 0){
      setTitle("Star Wars Character Count:")
      setButtonDisplay("Get Next Star Wars Character")

      const fetched = async()=> { // this is an asynchronous operation to fetch the star wars character - based on count
        await fetch(`https://swapi.dev/api/people/${count}`)
        .then(response => response.json())
        .then(responseData => {   
          setStarWarsData(responseData)
        })
      }

      fetched().then(() => {
        setUpdating(false)
      })
    }
  },[count])

  // Q: Add an event handler to increment count by one
  // Q: Can we have the event handler run directly within the button? (Hint: Yes)
  function handleCount(){
    setCount(count + 1)
    setUpdating(true)
  }

  console.log(starWarsData)

  return (
    <div className="mainpanel">
        <h2> {title} {count > 0 && count}</h2>

        {
          !updating ? (  // if updating is not happening (false), show the button clickable and starWarsData
            <>
              <button onClick={handleCount}>
              {buttonDisplay}
              </button>
              <div>
                <pre>Name: {starWarsData.name}</pre>
                <pre>Birth Year: {starWarsData.birth_year}</pre>
                <pre>Gender: {starWarsData.gender}</pre>
              </div>
            </>
          ) : (         // else show the disabled button and the 'loading' status
            <>
              <button disabled>
                {buttonDisplay}
              </button>
              <div>
                <pre>Name: updating... </pre>
                <pre>Birth Year: updating... </pre>
                <pre>Gender: updating... </pre>
              </div>
            </>
          )
        }
    </div>
  )
}
