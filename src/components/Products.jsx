import PropTypes from 'prop-types'
import '../../public/styles/Products.css'

function Products({ products = {}, addToCart }) {
  //if (typeof products !== 'object' ||!products || Array.isArray(products)
  if (!products) {
    console.error('Invalid products data provided:', products)
    return <div>Error: Unable to load products. Please try again later.</div>
  }

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>Price: {product.price}</h4>
            <p>{product.description}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default Products
