import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

const currency = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export default function Cart() {
  const { cart, clearCart, totalQuantity, totalPrice } = useCart()

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <div><span className="eyebrow">Tu próxima aventura</span><h1>Tu carrito<span className="cart-heading-count"> ({totalQuantity})</span></h1></div>
        {cart.length > 0 && <button className="clear-cart" type="button" onClick={clearCart}>Vaciar carrito</button>}
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">⌁</span>
          <h2>Tu próxima aventura empieza con una elección.</h2>
          <p>El carrito está esperando ese primer compañero de ruta.</p>
          <Link className="button button-primary" to="/productos">Explorar productos <span aria-hidden="true">↗</span></Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(({ product, quantity }) => (
              <article className="cart-item" key={product.id}>
                <Link className="cart-item-image" to={`/producto/${product.id}`}><img src={product.imagen} alt={product.nombre} /></Link>
                <div className="cart-item-info">
                  <span className="eyebrow">{product.categoría}</span>
                  <Link to={`/producto/${product.id}`}><h2>{product.nombre}</h2></Link>
                  <span className="cart-quantity">Cantidad: {quantity}</span>
                </div>
                <div className="cart-item-pricing"><span>{currency.format(product.precio)}</span><strong>{currency.format(product.precio * quantity)}</strong></div>
              </article>
            ))}
            <Link className="continue-shopping" to="/productos">← Seguir explorando</Link>
          </div>
          <aside className="order-summary">
            <span className="eyebrow">Resumen</span>
            <h2>Tu pedido</h2>
            <div className="summary-line"><span>Productos ({totalQuantity})</span><span>{currency.format(totalPrice)}</span></div>
            <div className="summary-line"><span>Envío</span><span className="shipping-free">A calcular</span></div>
            <div className="summary-total"><span>Total</span><strong>{currency.format(totalPrice)}</strong></div>
            <button className="button button-primary checkout-button" type="button" onClick={() => window.alert('¡Gracias! La compra de demostración está lista.')}>Continuar compra <span aria-hidden="true">↗</span></button>
            <p className="secure-note">Compra segura · Tus datos están protegidos</p>
          </aside>
        </div>
      )}
    </section>
  )
}
