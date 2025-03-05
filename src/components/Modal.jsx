export default function Modal({ item }) {
    if (!item) {
      return <div>No hay modales por mostrar</div>
    }
  
    return (
      <div>
        <h2>{item.title}</h2>
        <div>
            <p></p>
          <p>{item.completed ? 'Completado' : 'No Completado'}</p>
        </div>
      </div>
    )
  }
  