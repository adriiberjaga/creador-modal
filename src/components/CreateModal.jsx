import React, { useState } from "react";
import { useAppContext } from "../context/Context";
import "./CreateModal.css";

export default function CreateModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const store = useAppContext();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Por favor, ingresa un título");
      return;
    }

    const newModal = {
      id: crypto.randomUUID(),
      title: title,
      completed: completed,
    };
    console.log('Store:', store);
    console.log('Nuevo Modal:', newModal);
        
    store.createItem(newModal);
    
    setTitle("");
    setCompleted(false);
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
    }
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <h2 className="title">Registro</h2>
        <form className="form" onSubmit={handleSubmit}>
        <input className="input1"
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Título"
            value={title}
            />
          <input className="input2"
            onChange={handleChange}
            type="checkbox"
            name="completed"
            checked={completed}
            />
          <input type="submit" value="Crear Modal" />
        </form>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </>
  );
}
