import React, { Fragment } from 'react';
import RecipeCard from './RecipeCard';
import './Foods.css';

const Recipes = ({recipes}) => {
  const recipeCards = recipes.map(recipe => {
    console.log(recipe.name)
    return (
      <RecipeCard
        name={recipe.name}
        calories={recipe.calories}
        type={recipe.type}
        url={recipe.url}
        id={recipe.id}
      />
    )
  })

  return (
    <div className='recipes-container'>
      {recipeCards}
    </div>
  )
}


export default Recipes;
