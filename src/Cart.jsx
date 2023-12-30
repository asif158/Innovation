import PropTypes from "prop-types"

function Cart({ cart }) {
  const cartCount = cart.length
  const totalAmount = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <div>
      <h3>Cart</h3>
      <p>Items in Cart: {cartCount}</p>
      <p>Total Amount: {totalAmount}</p>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
}

export default Cart
