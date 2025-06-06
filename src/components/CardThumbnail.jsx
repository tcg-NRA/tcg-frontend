// frontend/src/components/CardThumbnail.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardThumbnail({ card }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/cards/${card._id}`)}
      className="cursor-pointer transform transition-transform hover:-translate-y-2"
    >
      <img
        src={card.art_url}
        alt={card.name}
        className="w-full h-auto rounded shadow-md"
      />
    </div>
  );
}
