import PropTypes from 'prop-types'

function Cart({ cart }) {
  const cartCount = cart.length
  const totalAmount = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <div>
      <h3>Items in Cart: {cartCount}</h3>
      <h3>Total Amount: {totalAmount}</h3>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
}

export default Cart
