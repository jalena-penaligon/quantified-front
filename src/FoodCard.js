import React from 'react';
import './Card.css';
const titleize = require('titleize');

const FoodCard = ({ name, calories, id, deleteFood}) => {
  return (
    <div className='card' key='id'>
      <h3>{titleize(name)}</h3>
      <p>Calories: {calories}</p>
      <button onClick={() => deleteFood(id)}>DELETE</button>
    </div>
  )
}

export default FoodCard;
