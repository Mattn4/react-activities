import React from "react"

export default function CharacterCard({character, idx, moveToFavourites}){

    // event listener to invoke the function passed in: moveToFavourites
    // idx is passed in as the index of the element to move to the Favourites section
    function handleFavourites(){
        moveToFavourites(idx)
    }

    return(
        <div className="charactercard" onClick={handleFavourites}>
            <p>Name: {character.name} </p>
            <p>Birth Year: {character.birth_year} </p>
            <p>Gender: {character.gender} </p>
        </div>
    )

}