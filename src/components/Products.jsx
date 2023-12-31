import PropTypes from 'prop-types'
import '../../public/styles/Products.css'
import { useState } from 'react'

function Products({ products = {}, addToCart }) {
  const [search, setSearch] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  //if (typeof products !== 'object' ||!products || Array.isArray(products)
  if (!products) {
    console.error('Invalid products data provided:', products)
    return <div>Error: Unable to load products. Please try again later.</div>
  }
  // console.log(search)

  return (
    <>
      <form className='filters'>
        <input
          className="search"
          type="text"
          placeholder="Search Products"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="price"
          type="text"
          placeholder="Max Price Filter"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </form>
      <div className="product-grid">
        {products.length > 0 ? (
          products
            .filter((product) => {
              const titleMatch =
                search.toLowerCase() === '' ||
                product.title.toLowerCase().includes(search)
              const priceMatch =
                maxPrice === '' || product.price <= parseFloat(maxPrice)

              return titleMatch && priceMatch
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
