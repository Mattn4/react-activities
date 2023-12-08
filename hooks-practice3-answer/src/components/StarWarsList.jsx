import React from 'react'
import CharacterCard from './CharacterCard'

export default function StarWarsList({getCharacterList, updating, starWarsData, moveToFavourites}) {

  // handlist event listener triggers the function passed in called getCharacterList
  function handleList(){ 
    getCharacterList()
  }

  return (
    <div className="floatingbox">
        <h2> Get Characters !!</h2>

        {
          !updating ? (  // if updating is not happening (false), show the button clickable and starWarsData
            <>
              <button onClick={handleList}>
              Get Characters
              </button>
            </>
          ) : (         // else show the disabled button and the 'loading' status
            <>
              <button disabled>
              Get Characters
              </button>
            </>
          )
        }
        {starWarsData.length > 0 &&
          starWarsData.map((character, key) => {
            return(
              <CharacterCard character={character} key={key} idx={key} moveToFavourites={moveToFavourites} />
            )
          })
        }
    </div>
  )
}
