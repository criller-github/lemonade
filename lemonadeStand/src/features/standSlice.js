//Definerer en “slice” af state, som håndterer alt, der har med “penge” at gøre (hvordan de ændres, og hvad initialværdien er)

//Sørger for, at vi ikke behøver at definere action-types manuelt og giver actions, fx sælgLemonade, og en reducer i én fil
import { createSlice } from '@reduxjs/toolkit'

//Angiver, at “penge” starter på 0
const initialState = {
  penge: 0,
}

export const standSlice = createSlice({
  name: 'stand', //navnet 
  initialState, //start-værdi
  reducers: {
    sælgLemonade: (state) => {
      state.penge += 5 //Her lægges 5 til state.penge
    },
    købCitroner: (state) => {
      state.penge -= 2 //Her trækkes 2 fra state.penge
    },
    setPenge: (state, action) => {
      state.penge = action.payload //Kan sætte penge til en bestemt værdi og i dette tilfælde, action.payload
    },
  },
})


//Når vi fx kalder dispatch(sælgLemonade()), bliver Redux-state opdateret efter logikken i sælgLemonade

export const { sælgLemonade, købCitroner, setPenge } = standSlice.actions

export default standSlice.reducer
