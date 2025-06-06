// frontend/src/pages/CardPage.jsx
import React, { useState, useEffect } from 'react';
import CardThumbnail from '../components/CardThumbnail';

export default function CardPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/cards`)
      .then(res => res.json())
      .then(setCards)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1 style={{ marginBottom: 16 }}>All Cards</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: 16
      }}>
        {cards.map(c => (
          <CardThumbnail key={c._id} card={c} />
        ))}
      </div>
    </div>
  );
}
