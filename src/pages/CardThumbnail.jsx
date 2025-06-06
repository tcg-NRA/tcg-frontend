// frontend/src/components/CardThumbnail.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardThumbnail({ card }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/cards/${card._id}`)}
      style={{
        cursor: 'pointer',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        transition: 'transform 150ms ease-in-out',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img
        src={card.art_url}
        alt={card.name}
        style={{ display: 'block', width: '100%', height: 'auto' }}
      />
    </div>
  );
}
