// src/pages/CoverPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildUrl } from '../utils/cloudinary';

export default function CoverPage() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch your cards from the backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/cards`)
      .then(res => res.json())
      .then(setCards)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Card Arts</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map(card => {
          // Prepend your Cloudinary folder (cards_art) to each public ID
          const publicId = `cards_art/${card._id}`;
          // Generate a 160×240 thumbnail URL
          const thumbUrl = buildUrl(publicId, { width: 160, height: 240 });

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
