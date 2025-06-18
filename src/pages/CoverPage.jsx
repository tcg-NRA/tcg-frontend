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
  const getScaledUrl = (url, width = 300) => {
    return url.replace(
      '/upload/',
      `/upload/w_${width},c_scale/`
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Card Arts</h1>

      {/* Horizontal scrollable flex container */}
      <div className="flex overflow-x-auto space-x-6 py-4">
        {cards.map(card => (
          <div
            key={card._id}
            className="flex-none cursor-pointer transform transition-transform hover:-translate-y-2"
            style={{ width: '200px' }}
            onClick={() => navigate(`/cards/${card._id}`)}
          >
            <img
              src={getScaledUrl(card.art_url, 400)}
              alt={card.name}
              loading="lazy"
              className="
                w-full
                h-auto
                object-contain
                rounded shadow-md
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}