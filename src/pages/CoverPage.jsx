// frontend/src/pages/CoverPage.jsx
import React, { useEffect, useState } from 'react';

export default function CoverPage() {
  const [cards, setCards] = useState([]);

  const cloudName = 'dbkr3jpmr';
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_120,h_180,c_fit/cards/`;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/cards`)
      .then(res => res.json())
      .then(data => {
        console.log("✅ Fetched cards:", data);
        setCards(data);
      })
      .catch(err => console.error("🔴 Failed to fetch cards:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Card Arts</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cards.map((card, i) => {
          // 1) If backend gave us image_name, strip suffix and rebuild URL…
          let imageUrl = '';
          if (card.image_name) {
            const clean = card.image_name.replace(/_[a-z0-9]{6,}$/i, '');
            imageUrl = `${baseUrl}${clean}.png`;
          }
          // 2) …otherwise, fall back to whatever art_url you already had
          else if (card.art_url) {
            imageUrl = card.art_url;
          }
          // 3) If neither exists, show a placeholder
          else {
            imageUrl = 'https://via.placeholder.com/100x150?text=No+Image';
          }

          return (
            <div
              key={card._id || i}
              className="text-center transform transition-transform hover:-translate-y-2"
            >
              <div className="w-[120px] h-[180px] mx-auto bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={card.name || 'Card Image'}
                  width="100"
                  height="150"
                  loading="lazy"
                  className="w-[100px] h-[150px] object-contain"
                  onError={e => {
                    e.target.src = 'https://via.placeholder.com/100x150?text=No+Image';
                  }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-800">{card.name || 'Unknown Card'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
