import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Products from './Products'
import Cart from '../Cart'

function Home({ token }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error.message)
      }
    }

    fetchProducts()
  }, [token])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <h2>Home</h2>
      <Cart cart={cart} />
      <Products products={products} addToCart={addToCart} />
    </div>
  )
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
}

export default Home
