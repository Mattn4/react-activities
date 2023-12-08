import './App.css';
import { useState } from 'react';
import StarWarsList from './components/StarWarsList';
import StarWarsFavourites from './components/StarWarsFavourites';

function App() {

  const [starWarsData, setStarWarsData] = useState([])  //pull all starwars characters from https://swapi.dev/api/people/?page=1
  const [updating, setUpdating] = useState()            //manage my update status of fetch starwars data
  const [favourites, setFavourites] = useState([])      //manage the selected favourite Star Wars character(s)

  // event hanlder to passed to StarWarsList to trigger the request to get starwars characters from the api
  function getCharacterList(){  

    setUpdating(true) // when this function is invoked, updating state is set to true to DISABLE the 'Get Characters' button in StarWarsList component

    const fetched = async()=> { // this is an asynchronous request to fetch the star wars characters from the api
      await fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(responseData => {   
        setStarWarsData(responseData.results)
      })
    }

    fetched().then(() => {
      setUpdating(false)  // when the fetch request is complet, updating state is set to false ENABLE the 'Get Characters' button in StarWarsList component
    })

  }

  // this event handler is passed in to StarWarsList to add Favourites to favourites state (see above)
  function moveToFavourites(idx=-1){
    if(idx >= 0){
      setFavourites((previousData) => {
        return(
          [...previousData, 
            {
              name: starWarsData[idx].name,
              birth_year: starWarsData[idx].birth_year,
              gender: starWarsData[idx].gender
            }
          ]
        )
      })
    }
  }

  // this event handler is passed in to StarWars Favouries to REMOVE Favourites from favourites state (see above)
  function removeFavourites(idx=-1){
    if(idx >= 0){
      setFavourites((previousData) => {
        return(
          [...previousData.filter((item, key) => key !== idx && item )] // remove character according to index
        )
      })
    }

  }

  return (
    <div className="floatingboxcontainer">
      <StarWarsList       // StarwarsList displays the characters downloaded from the api
        getCharacterList={getCharacterList} 
        updating={updating}
        starWarsData={starWarsData}
        moveToFavourites={moveToFavourites}
      />
      <StarWarsFavourites  // StarwarsFavourites CAN remove favourite characters
        favourites={favourites}
        removeFavourites={removeFavourites} 
      />
    </div>
  );
}

export default App;
