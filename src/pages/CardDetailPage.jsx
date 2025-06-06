// frontend/src/pages/CardDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CardDetailPage() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/cards/${id}`)
      .then(res => res.json())
      .then(setCard)
      .catch(console.error);
  }, [id]);

  if (!card) return <div style={{ padding: 16 }}>Loading…</div>;

  return (
    <div style={{ padding: 16 }}>
      <Link to="/" style={{ display: 'block', marginBottom: 16 }}>← Back to Gallery</Link>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 600 }}>
        <img
          src={card.art_url}
          alt={card.name}
          style={{ width: '100%', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
        />
        <h1 style={{ marginTop: 16 }}>{card.name}</h1>
        <p style={{ marginTop: 8 }}>{card.description}</p>
        {/* you can add mana/attack/health/stats here */}
      </div>
    </div>
  );
}
