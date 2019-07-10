import React from 'react';
import './Card.css';

const MealCard = ({ name, foods, id, deleteMeal}) => {
  return (
    <div className='card' key='id'>
      <h3>{name}</h3>
      <p>{foods}</p>
      <button onClick={() => deleteMeal(id)}>🗑</button>
    </div>
  )
}

export default MealCard;
