//Definerer den centrale Redux store (hvor al app'ens tilstand gemmes)
import { configureStore } from '@reduxjs/toolkit' //Funktion fra Redux Toolkit, som gør det nemt at sætte Redux op
import standReducer from './features/standSlice' //Importeres fra standSlice.js fil
import cartReducer from './features/cartSlice'

//Ved at angive { stand: standReducer } fortæller vi Redux, at state.stand håndteres af den reducer, der eksporteres i standSlice.js
export const store = configureStore({
  reducer: {
    stand: standReducer,
    cart: cartReducer,
  },
})
