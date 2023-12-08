import React from "react"

export default function RemoveFavouriteCard({character, idx, removeFavourites}){

    // event listener to invoke the function passed in: removeFavourites
    // idx is passed in as the index of the element to remove
    function handleRemoveFavourite(){
        removeFavourites(idx)
    }

    return(
        <div className="removecharactercard" onClick={handleRemoveFavourite}>
            <p>Name: {character.name} </p>
            <p>Birth Year: {character.birth_year} </p>
            <p>Gender: {character.gender} </p>
        </div>
    )

}