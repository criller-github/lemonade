//Navbar.jsx bruger Link fra React Router til at skifte ruterne i App.jsx, så man kan besøge “/”, “/shop” og “/cart


import React from 'react' 
import { Link } from 'react-router-dom' //Importerer Link fra react-router-dom

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">Lemoande Stand</Link>
      <Link to="/shop" className="nav-button">Shop</Link>
      <Link to="/cart" className="nav-button">Cart</Link>
    </nav>
  )
}

export default Navbar
