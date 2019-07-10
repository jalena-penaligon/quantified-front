import React from 'react';
import './Card.css';

const RecipeCard = ({ name, calories, type, url, id}) => {
  return (
    <div className='card' key='id'>
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Category: {type}</p>
      <a href={url}>Get Recipe</a>
    </div>
  )
}

export default RecipeCard;
