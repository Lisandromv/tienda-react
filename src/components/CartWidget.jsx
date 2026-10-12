import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

export default function CartWidget() {
  const { totalQuantity } = useCart()

  return (
    <Link className="cart-widget" to="/carrito" aria-label={`Carrito, ${totalQuantity} productos`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="20" r="1.2" fill="currentColor" />
        <circle cx="18" cy="20" r="1.2" fill="currentColor" />
      </svg>
      <span>Carrito</span>
      <span className="cart-count">{totalQuantity}</span>
    </Link>
  )
}
