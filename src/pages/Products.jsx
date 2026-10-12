import ItemListContainer from '../components/ItemListContainer.jsx'

export default function Products() {
  return (
    <div className="inner-page">
      <div className="page-intro">
        <span className="eyebrow">La aventura empieza acá</span>
        <h1>Todo el equipo.<br /><em>Cualquier destino.</em></h1>
        <p>Selección nómada para escapadas espontáneas y grandes travesías.</p>
      </div>
      <ItemListContainer título="Nuestro equipamiento" descripción="Calidad en la que podés confiar, estés donde estés." />
    </div>
  )
}
