import { useState } from 'react'
import { CartContext } from './CartState.js'

// Centraliza el estado del carrito y sus totales derivados.
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.product.id === product.id)
      if (existing) {
        return currentCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...currentCart, { product, quantity }]
    })
  }

  const clearCart = () => setCart([])
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.precio * item.quantity,
    0,
  )
  const value = { cart, addToCart, clearCart, totalQuantity, totalPrice }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
