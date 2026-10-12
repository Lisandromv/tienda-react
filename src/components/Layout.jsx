import { Link, NavLink, Outlet } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

const team = [
  { name: 'Lisandro Molina', role: 'Desarrollo React', initials: 'LM' },
  { name: 'Sofía García', role: 'Diseño UX/UI', initials: 'SG' },
  { name: 'Mateo López', role: 'Productos y contenido', initials: 'ML' },
]

// Mantiene la navegación y la información de marca presentes en todas las rutas.
export default function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Nómada Store, inicio">
            <span className="brand-mark" aria-hidden="true">N</span>
            <span className="brand-name">nómada<span>store</span></span>
          </Link>
          <nav className="main-nav" aria-label="Navegación principal">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <Link to="/#nosotros">Nuestra esencia</Link>
          </nav>
          <CartWidget />
        </div>
      </header>
      <main className="page-main"><Outlet /></main>
      <footer className="site-footer" id="nosotros">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-about">
              <Link className="brand footer-brand" to="/">
                <span className="brand-mark" aria-hidden="true">N</span>
                <span className="brand-name">nómada<span>store</span></span>
              </Link>
              <p>Creemos que cada camino empieza con una buena elección. Te equipamos para vivirlo.</p>
              <span className="footer-location">Buenos Aires, Argentina · Desde 2021</span>
            </div>
            <div className="footer-team">
              <span className="eyebrow footer-eyebrow">Detrás de cada aventura</span>
              <div className="team-grid">
                {team.map((member) => (
                  <article className="team-card" key={member.name}>
                    <span className="team-avatar">{member.initials}</span>
                    <div><strong>{member.name}</strong><span>{member.role}</span></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 Nómada Store</span><span>Hecho para los que van más allá.</span></div>
        </div>
      </footer>
    </>
  )
}
