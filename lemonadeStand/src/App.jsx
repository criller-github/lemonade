//Laver selve “siderne” ved at bruge <Routes> og <Route> fra React Router
//Viser en <Navbar> øverst, så man kan navigere mellem de forskellige ruter
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import LemonadeStand from './components/LemonadeStand'
import Shop from './components/shop'
import Cart from './components/cart'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/> {/* Menu med links til de forskellige ruter */}
      <Routes>
        <Route path="/" element={<LemonadeStand/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

//Når man klikker på et link i navbaren til fx /shop, skifter React Router til at vise <Shop/> i stedet for <LemonadeStand/>

export default App
