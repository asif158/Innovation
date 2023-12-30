import PropTypes from 'prop-types'

function Products({ products, addToCart }) {
  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>Price: {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

Products.PropTypes = {
    products: PropTypes.shape({

    }),
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default Products
