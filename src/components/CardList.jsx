//src/components/CardList.jsx
import React from 'react';
import CardItem from './CardItem';

function CardList({ cards }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {cards.map(card => (
        <CardItem key={card._id} card={card} />
      ))}
    </div>
  );
}

export default CardList;