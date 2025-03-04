//LemonadeStand.jsx bruger Redux’ useSelector til at vise penge og useDispatch til at opdatere state gennem actions (sælgLemonade, købCitroner)


import { useSelector, useDispatch } from 'react-redux' //Hooks fra Redux Toolkit, som gør det nemt at læse og opdatere Redux-state
import { sælgLemonade, købCitroner } from '../features/standSlice' //Actions fra standSlice.js

function LemonadeStand() {
  const dispatch = useDispatch() //Hook, som giver os adgang til dispatch-funktionen, så vi kan kalde actions
  const penge = useSelector((state) => state.stand.penge) //Hook, som giver os adgang til Redux-state (penge)

  const handleSell = () => { 
    dispatch(sælgLemonade()) //Kalder Redux-actionen sælgLemonade
  }

  const handleBuy = () => {
    dispatch(købCitroner())
  }

  return (
    <div className="main-content">
      <h1>Fresh Lemonade 🍋</h1>
      <h2>Profit: {penge} DKK</h2>
      <button onClick={handleSell}>Sell Lemonade 🍹</button>
      <button onClick={handleBuy}>Purchase Lemons 🍋</button>
    </div>
  )
}

export default LemonadeStand
