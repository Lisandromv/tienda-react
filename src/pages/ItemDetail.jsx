import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/useCart.js'

const currency = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

// La vista busca el producto seleccionado y controla su cantidad de compra.
export default function ItemDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [producto, setProducto] = useState(null)
  const [cantidad, setCantidad] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetch('/productos.json')
      .then((response) => {
        if (!response.ok) throw new Error('No pudimos cargar este producto.')
        return response.json()
      })
      .then((productos) => {
        if (active) setProducto(productos.find((item) => String(item.id) === id) || null)
      })
      .catch((fetchError) => { if (active) setError(fetchError.message) })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [id])

  if (loading) return <div className="detail-state">Preparando el equipo...</div>
  if (error) return <div className="detail-state state-error">{error}</div>
  if (!producto) return <div className="detail-state"><h1>Producto no encontrado</h1><Link className="text-link" to="/productos">Volver al catálogo ↗</Link></div>

  return (
    <section className="detail-layout">
      <div className="detail-image-wrap">
        <img src={producto.imagen} alt={producto.nombre} className="detail-image" />
        <span className="detail-image-label">NÓMADA EQUIPMENT / {String(producto.id).padStart(2, '0')}</span>
      </div>
      <div className="detail-info">
        <Link className="back-link" to="/productos">← Volver al catálogo</Link>
        <span className="eyebrow">{producto.categoría}</span>
        <h1>{producto.nombre}</h1>
        <p className="detail-description">{producto.descripción}</p>
        <div className="detail-price">{currency.format(producto.precio)} <span>ARS</span></div>
        <div className="detail-rule" />
        <div className="quantity-row">
          <span>Cantidad</span>
          <div className="quantity-control">
            <button type="button" onClick={() => setCantidad((value) => Math.max(1, value - 1))} aria-label="Disminuir cantidad">−</button>
            <span>{cantidad}</span>
            <button type="button" onClick={() => setCantidad((value) => value + 1)} aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
        <button className="button button-primary detail-add" type="button" onClick={() => addToCart(producto, cantidad)}>Agregar al carrito <span aria-hidden="true">↗</span></button>
        <div className="detail-assurance"><span>✓</span> Envío seguro a todo el país <span className="assurance-separator">·</span> 30 días para cambios</div>
      </div>
    </section>
  )
}
