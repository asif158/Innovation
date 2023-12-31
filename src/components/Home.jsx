import { useState, useEffect } from 'react'
import '../../public/styles/Home.css'
import axios from 'axios'
import PropTypes from 'prop-types'
import Products from './Products'
import Cart from '../Cart'

function Home({ token }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setProducts(response.data.products)
      } catch (error) {
        console.error('Error fetching products:', error.message)
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [token])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      <div className="home">
        <h2>Products</h2>
        <h2 className="items" onClick={handleCartClick}>
          Cart Items ({cart.length})
        </h2>
      </div>
      <div>
        {isCartOpen && <Cart cart={cart} onClose={handleCartClick} />}
        {isLoading && <p>Loading products...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && (
          <Products products={Object.values(products)} addToCart={addToCart} />
        )}
      </div>
    </>
  )
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
}

export default Home
