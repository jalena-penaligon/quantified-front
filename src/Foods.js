import React, { Fragment } from 'react';
import FoodCard from './FoodCard';
import './Foods.css';

const Foods = ({foods, deleteFood}) => {

  const foodCards = foods.map(food => {
    return (
      <FoodCard
        name={food.name}
        calories={food.calories}
        id={food.id}
        key={food.id}
        deleteFood={deleteFood}
      />
    )
  })

  return (
    <div className='foods-container'>
      {foodCards}
    </div>
  )
}


export default Foods;
