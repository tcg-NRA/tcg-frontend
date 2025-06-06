//src/components/CardItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ card }) {
  return (
    <Link to={`/cards/${card._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '0.5rem',
        width: '200px',
        background: '#fff'
      }}>
        <img src={card.art_url} alt={card.name} style={{ width: '100%' }} />
        <h3>{card.name}</h3>
        <p>Mana: {card.mana_cost}</p>
      </div>
    </Link>
  );
}

export default CardItem;