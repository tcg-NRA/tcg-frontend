import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CoverPage() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch the list of cards (each has art_url)
    fetch(`${process.env.REACT_APP_API_URL}/api/cards`)
      .then(res => res.json())
      .then(setCards)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Card Arts</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map(card => (
          <div
            key={card._id}
            className="cursor-pointer transform transition-transform hover:-translate-y-2"
            onClick={() => navigate(`/cards/${card._id}`)}
          >
            <img
              src={card.art_url}
              alt={card.name}
              loading="lazy"
              className="w-full max-w-xs max-h-72 object-cover rounded shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
