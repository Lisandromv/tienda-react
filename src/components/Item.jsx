import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

const currency = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

// Cada tarjeta presenta el producto y permite sumarlo sin salir del catálogo.
export default function Item({ producto }) {
  const { addToCart } = useCart()

  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/producto/${producto.id}`} aria-label={`Ver ${producto.nombre}`}>
        <img className="product-image" src={producto.imagen} alt={producto.nombre} loading="lazy" />
        <span className="product-category">{producto.categoría}</span>
      </Link>
      <div className="product-card-content">
        <Link className="product-title-link" to={`/producto/${producto.id}`}>
          <h3>{producto.nombre}</h3>
        </Link>
        <div className="product-card-bottom">
          <span className="product-price">{currency.format(producto.precio)}</span>
          <button className="icon-button add-product" type="button" onClick={() => addToCart(producto)} aria-label={`Agregar ${producto.nombre} al carrito`}>
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  )
}
