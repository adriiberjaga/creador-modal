import './App.css'
import { useState } from 'react'
import Modal from './components/Modal'
import CreateModal from './components/CreateModal'
import { useAppContext } from './context/Context'
function App() {

  const [openModal, setOpenModal] = useState(false)
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const { items } = useAppContext()
  function abrirModal() {
    setOpenModal(true)
    setOpenCreateModal(false)
  }
  function abrirCreateModal() {
    setOpenCreateModal(true)
    setOpenModal(false)
  }
  function onClose() {
    setOpenCreateModal(false)
    setOpenModal(false)
  }
  return (
    <>
      <button onClick={abrirModal}>Ver Modales</button>
      <button onClick={abrirCreateModal}>Crear Modal</button>
      
      <div>
        {openModal && (
          <div>
            <button onClick={onClose}>x</button>
            <h2>Modales Existentes</h2>
            {items.length === 0 ? (
              <p>No hay modales para mostrar</p>
            ) : (
              items.map((item) => (
                <Modal key={item.id} item={item} />
              ))
            )}
          </div>
        )}
      </div>
      
      <div>
        {openCreateModal && (
          <CreateModal onClose={onClose} />
        )}
      </div>
    </>
  )
}


export default App