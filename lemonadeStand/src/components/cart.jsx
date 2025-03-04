
import { useSelector, useDispatch } from 'react-redux' //useSelector: Læser data fra Redux-store | useDispatch: Skriver data til Redux-store
import { removeFromCart, updateQuantity, clearCart } from '../features/cartSlice' //removeFromCart, updateQuantity, clearCart: Actions, der er defineret i cartSlice.js


function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems) //cartitems, som er et array med id,name osv, hentes fra Redux-state. I store.js defineres en “cart”-reducer med “cartSlice"

  //Kalder removeFromCart(id), som fjerner item helt
  const handleRemove = (id) => {
    dispatch(removeFromCart(id)) 
  }

  //Kalder updateQuantity, men hvis quantity < 1, så removeFromCart
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(id))
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }))
    }
  } //removeFromCart og updateQuantity er Redux-actions. Redux kører så “reducers” i cartSlice, der ændrer cartItems i store

  //Reducerer totalItems ved at summere quantity for alle items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="main-content">
      <h1>Your Cart</h1>

      {/* 2-søjlet layout */}
      <div className="cart-content">

        {/* Venstre søjle: Liste af items */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <h2>The cart is empty 😞</h2>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-row">
                {/* Venstre del af item*/}
                <div className="cart-left">
                  <img src={item.image} alt={item.name} />
                </div>

                {/* Højre del af item*/}
                <div className="cart-right">
                <h3>{item.name}</h3>
                  <div>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span style={{ margin: '0 1em' }}>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => handleRemove(item.id)} 
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Højre søjle: Checkout */}
        <div className="cart-summary">
          <h3>Checkout</h3>
          <p>Total Items: {totalItems}</p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
