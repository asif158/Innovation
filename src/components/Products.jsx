import PropTypes from 'prop-types'
import '../../public/styles/Products.css'
import { useState } from 'react'

function Products({ products = {}, addToCart }) {
  const [search, setSearch] = useState('')
  //if (typeof products !== 'object' ||!products || Array.isArray(products)
  if (!products) {
    console.error('Invalid products data provided:', products)
    return <div>Error: Unable to load products. Please try again later.</div>
  }
  // console.log(search)

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {products.length > 0 ? (
          products
            .filter((product) => {
              return search.toLowerCase() === ''
                ? product
                : product.title.toLowerCase().includes(search)
            })
            .map((product) => (
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
    </>
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
