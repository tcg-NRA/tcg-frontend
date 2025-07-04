import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CoverPage() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/cards`)
      .then(res => res.json())
      .then(setCards)
      .catch(console.error);
  }, []);

  // helper to insert Cloudinary scale parameters into the URL
  const getScaledUrl = (url, width = 400) =>
    url.replace('/upload/', `/upload/w_${width},c_scale/`);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Card Arts</h1>

      {/* Responsive grid: auto-fit columns that flex to fill available space */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}
      >
        {cards.map(card => (
          <div
            key={card._id}
            className="cursor-pointer transform transition-transform hover:-translate-y-2"
            onClick={() => navigate(`/cards/${card._id}`)}
          >
            <img
              src={getScaledUrl(card.art_url, 600)}
              alt={card.name}
              loading="lazy"
              className="w-full h-auto object-contain rounded shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
