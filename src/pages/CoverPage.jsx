// frontend/src/pages/CoverPage.jsx
import React, { useEffect, useState } from 'react';

export default function CoverPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/cards`)
      .then(res => res.json())
      .then(setCards)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Card Arts</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {cards.map((card, i) => (
          <div
            key={card._id || i}
            className="cursor-pointer transform transition-transform hover:-translate-y-2"
          >
            <img
              src={card.art_url}
              alt={card.name}
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
