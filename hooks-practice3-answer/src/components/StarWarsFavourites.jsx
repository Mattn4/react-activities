import React from "react";
import RemoveFavouriteCard from "./RemoveFavouriteCard";

export default function StarWarsFavourites({favourites, removeFavourites}){

    return (
        <div className="floatingbox">
            <h2> Save Favourites </h2>
            <button>
              Save Characters
            </button>
            { 
              favourites .length > 0 &&
              favourites.map((character, key) => <RemoveFavouriteCard key={key} character={character} idx={key} removeFavourites={removeFavourites} />)
            }
        </div>
    )

}