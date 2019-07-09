import React, { Fragment } from 'react';
import MealCard from './MealCard';
import './Foods.css';

const Meals = ({meals, deleteMeal}) => {

  const mealCards = meals.map(meal => {
    return (
      <MealCard
        name={meal.name}
        id={meal.id}
        key={meal.id}
        deleteMeal={deleteMeal}
      />
    )
  })

  return (
    <div className='meals-container'>
      {mealCards}
    </div>
  )
}


export default Meals;
