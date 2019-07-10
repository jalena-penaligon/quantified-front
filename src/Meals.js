import React, { Fragment } from 'react';
import MealCard from './MealCard';
import './Foods.css';

var parseMealFoods = (mealFoods) => {
  return mealFoods.map(food => {
    return `Name: ${food.name} \n Calories: ${food.calories} \n`
  })
}

const Meals = ({meals, deleteMeal}) => {
  const mealCards = meals.map(meal => {
    console.log(parseMealFoods(meal.foods).join(''))
    return (
      <MealCard
        name={meal.name}
        foods={(parseMealFoods(meal.foods)).join('')}
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
