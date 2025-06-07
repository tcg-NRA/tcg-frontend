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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map((card, i) => (
          <div
            key={card._id || i}
            className="text-center transform transition-transform hover:-translate-y-2"
          >
            <div className="w-full max-w-[160px] mx-auto aspect-[2/3] bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center">
              <img
                src={card.art_url}
                alt={card.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="mt-2 text-sm text-gray-800">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
