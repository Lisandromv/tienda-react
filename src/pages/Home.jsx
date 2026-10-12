import { Link } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer.jsx'

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="hero-kicker"><span className="kicker-line" /> Para espíritus inquietos</span>
          <h1>El mundo<br />te está <em>esperando.</em></h1>
          <p>El equipo correcto cambia el camino. Encontrá todo lo que necesitás para tu próxima aventura.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/productos">Explorar productos <span aria-hidden="true">↗</span></Link>
            <span className="hero-note"><span className="note-dot" /> Envíos a todo el país</span>
          </div>
          <div className="hero-stats">
            <div><strong>+2.4k</strong><span>Aventureros equipados</span></div>
            <div><strong>4.9<span className="star">★</span></strong><span>Calificación promedio</span></div>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Carpa de aventura junto a un lago de montaña">
          <div className="hero-image" />
          <div className="image-tag"><span className="tag-icon">↗</span><span>La próxima historia<br /><strong>empieza acá.</strong></span></div>
          <span className="image-coordinate">PATAGONIA · 50° S</span>
        </div>
        <span className="hero-index">01 / 03</span>
      </section>
      <div className="benefit-strip">
        <div><span className="benefit-icon">✳</span><span>Equipo probado<br /><strong>en terreno real</strong></span></div>
        <div><span className="benefit-icon">◇</span><span>Materiales<br /><strong>que duran</strong></span></div>
        <div><span className="benefit-icon">↗</span><span>Envío gratis<br /><strong>desde $120.000</strong></span></div>
        <div><span className="benefit-icon">♡</span><span>Asesoramiento<br /><strong>de aventureros</strong></span></div>
      </div>
      <ItemListContainer título="El equipo que te lleva más lejos" descripción="Piezas elegidas para hacer que cada salida cuente." />
      <section className="closing-banner">
        <span className="eyebrow">No hay mapa para lo inesperado</span>
        <h2>Salí a encontrar<br /><em>tu próximo lugar.</em></h2>
        <Link className="button button-light" to="/productos">Ver todo el equipo <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  )
}
