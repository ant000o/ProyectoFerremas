import React, { useState } from 'react';
import axios from 'axios';

function ItemForm() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/items', { nombre, descripcion })
      .then(() => {
        setNombre('');
        setDescripcion('');
        alert('Item creado');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
      <button type="submit">Crear</button>
    </form>
  );
}

export default ItemForm;
