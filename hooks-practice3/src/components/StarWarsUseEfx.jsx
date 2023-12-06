import React, { useEffect } from 'react'

export default function StarWarsUseEfx() {

    /**
     * Challenge: Have a button "Get Next Star Wars Character" 
     * that will get a new character from the Star Wars API.
     */

    const [title, setTitle] = React.useState()                // Q: Initialize state to manage a page title of String
    const [starWarsData, setStarWarsData] = React.useState()  // Q: Initialize state to manage JSON data (Star Wars Data)
    const [count, setCount] = React.useState()                // Q: Initialize state to manage the count of Integer

    // Since react 16.8, useEffect hook was introduced 
    // to track changes and render updates to a component

    // Q: Add a useEffect Hook to display title: "Welcome Padawans" when the page loads

    
    // Q: Add a useEffect Hook to fetch a Star Wars profile when count is updated


    // Q: Add an event handler to increment count by one
    // Q: Can we have the event handler run directly within the button? (Hint: Yes) 
    
  return (
    <div className="mainpanel">
        <h2> {title} {count}</h2>
        <button onClick="">
            Get Next Star Wars Character
        </button>
        <pre>Name:</pre>
        <pre>Birth Place:</pre>
        <pre>Gender:</pre>
    </div>
  )
}
