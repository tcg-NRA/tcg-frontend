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

  // helper to insert Cloudinary resize parameters into the URL
  const getThumbnailUrl = (url, width = 200, height = 200) => {
    // assumes URL contains "/upload/"
    return url.replace(
      '/upload/',
      `/upload/w_${width},h_${height},c_fill/`
    );
  };

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
              src={getThumbnailUrl(card.art_url, 150, 150)}
              alt={card.name}
              loading="lazy"
              className="
                w-40 h-40           /* optional fixed box for layout */
                object-cover        /* maintain aspect */
                rounded shadow-md   /* styling */
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}