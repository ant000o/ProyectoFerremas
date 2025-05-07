import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.nombre} - {item.descripcion}</li>
      ))}
    </ul>
  );
}

export default ItemList;
