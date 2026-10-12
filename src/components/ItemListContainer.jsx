import { useEffect, useState } from 'react'
import Item from './Item.jsx'

export default function ItemListContainer({ título = 'Todo para salir al mundo', descripción, category }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // El catálogo se obtiene desde el JSON público al montar la sección.
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/productos.json')
        if (!response.ok) throw new Error('No pudimos cargar el catálogo.')
        setProductos(await response.json())
      } catch (fetchError) {
        setError(fetchError.message || 'Ocurrió un error al cargar los productos.')
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const visibles = category
    ? productos.filter((producto) => producto.categoría === category)
    : productos

  return (
    <section className="catalog-section" id="productos">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Equipamiento elegido para vos</span>
          <h2>{título}</h2>
          {descripción && <p>{descripción}</p>}
        </div>
        <span className="catalog-count">{productos.length.toString().padStart(2, '0')} productos</span>
      </div>
      {loading && <p className="state-message">Preparando el equipo...</p>}
      {error && <p className="state-message state-error">{error}</p>}
      {!loading && !error && visibles.length === 0 && <p className="state-message">No hay productos en esta categoría.</p>}
      {!loading && !error && visibles.length > 0 && (
        <div className="product-grid">
          {visibles.map((producto) => <Item key={producto.id} producto={producto} />)}
        </div>
      )}
    </section>
  )
}
