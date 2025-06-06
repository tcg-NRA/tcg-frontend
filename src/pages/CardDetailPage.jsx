//src/pages/CardDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CardDetailPage() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/cards/${id}`)
      .then(res => res.json())
      .then(data => setCard(data));
  }, [id]);

  if (!card) return <div>Loading…</div>;

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      <img src={card.art_url} alt={card.name} style={{ width: '300px' }} />
      <div>
        <h1>{card.name}</h1>
        <p><strong>Mana:</strong> {card.mana_cost}</p>
        <p><strong>Attack:</strong> {card.attack}</p>
        <p><strong>Health:</strong> {card.health}</p>
        <p>{card.description}</p>

        <h3>Keywords</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {card.keywords.map(kw => (
            <span key={kw} style={{ background: '#eee', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
              {kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardDetailPage;