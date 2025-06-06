//src/pages/CardPage.jsx
import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';

function CardPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/cards`)
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All Cards</h1>
      <CardList cards={cards} />
    </div>
  );
}

export default CardPage;