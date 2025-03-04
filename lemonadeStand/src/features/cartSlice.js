//definerer al logik for at tilføje/fjerne/ændre item i din kurv

import { createSlice } from '@reduxjs/toolkit' //måde at lave “actions” og “reducers” på i ét sted

//definerer, at cartItems starter som et tomt array
const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //tjekker om varen allerede er i cartItems (via id). Hvis den findes, øges quantity += 1
    addToCart: (state, action) => {

      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        //ellers pushes en ny item til cartItems
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    },

    //fjerner item ved at filtrere listen. action.payload er typisk item-id
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },

    //ffinder item i cartItems og sætter quantity = action.payload.quantity
    updateQuantity: (state, action) => {
      
      const { id, quantity } = action.payload
      const item = state.cartItems.find((item) => item.id === id)
      if (item) {
        item.quantity = quantity
      }
    },
    //nulstiller cartItems til en tom liste
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
