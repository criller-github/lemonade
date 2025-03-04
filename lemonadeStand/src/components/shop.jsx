// useEffect til at fetch drinks fra et eksternt API (asynkront)
//Viser drinks i et grid med “Add to cart” knapper
//Kaldet dispatch(addToCart(product)) opdaterer Redux

import { useState, useEffect } from 'react' // useState: bruges til at holde data for “drinks” lokalt i komponentet. useEffect: bruges til at hente data fra API
import { useDispatch } from 'react-redux' //hook fra React Redux, der giver adgang til dispatch(...). Så man kan sende actions til Redux-store (fx addToCart)
import { addToCart } from '../features/cartSlice'

function Shop() {
  const [drinks, setDrinks] = useState([]) //drinks: Lokalt state-array med drink-data (tomt i starten)
  const dispatch = useDispatch() //dispatch: Funktion, der sender en action til Redux-store

  // kører når komponentet mountes 1 gang (pga. [] som afhængigheder)
  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch( //fetch henter data fra API’et, søger efter “lemon”-drinks
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon'
        )
        const data = await response.json()
        if (data.drinks) {
          setDrinks(data.drinks) //Opdaterer lokal state med de hentede drinks
        }
      } catch (error) {
        console.error('Fejl', error)
      }
    }
    fetchDrinks()
  }, []) //Hvis data.drinks er falsk (null/undefined), sætter vi dem ikke (dvs. ingen drinks fundet)

  //Når man klikker “Add to cart” på en drink, laver et simpelt objekt med id, navn og billede
  const handleAddToCart = (drink) => {
    const product = {
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    }
    dispatch(addToCart(product)) //sender en Redux-action “addToCart” med “product” som payload til Redux-store
  }

  return (
    <div className="main-content">
      <div className="shop-header">
        <h1>Shop</h1>
      </div>
      {drinks.length === 0 ? ( //Viser en besked hvis drinks.length er 0
        <p>Loading drinks...</p>
      ) : (
        <div className="shop-grid">
          {drinks.map((drink) => ( //Ellers map’er vi igennem drinks-arrayet og laver et “kort” (<div className="shop-item">) for hver drink
            <div key={drink.idDrink} className="shop-item">
              <h4>{drink.strDrink}</h4>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
              <button onClick={() => handleAddToCart(drink)}> 
                Add to cart 
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

//det virker fordi at react kører koden i return, der afspejler drinks-state
//og hver gang setDrinks ændrer state, renderes komponentet på ny med de nye data.
//Redux er bundet til React via useDispatch, så “Add to cart”-knappen kan opdatere cart-slicen i vores globale store

export default Shop
