// src/pages/CoverPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildUrl } from '../utils/cloudinary';
import { cards as cardList } from '../data/cards';

export default function CoverPage() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load your manifest of public_ids
    setCards(cardList);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Card Arts</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map((card) => {
          // Build a small thumbnail URL
          const thumbUrl = buildUrl(card.public_id, { width: 160, height: 240 });
          return (
            <div
              key={card._id}
              className="cursor-pointer transform transition-transform hover:-translate-y-2"
              onClick={() => navigate(`/cards/${card._id}`)}
            >
              <img
                src={thumbUrl}
                alt={card.name}
                loading="lazy"
                className="w-full h-auto rounded shadow-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
