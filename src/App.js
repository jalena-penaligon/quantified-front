import React, { Component } from 'react';
import Foods from './Foods';
import Meals from './Meals';
import Recipes from './Recipes';
import Form from './Form';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [],
      meals: [],
      recipes: [],
      filter: "foods"
    }
  }

  componentWillMount () {
    fetch('https://lower-goose-93602.herokuapp.com/api/v1/foods')
    .then(results => {
      return results.json();
    }).then(data => {
      let foods = data.map((food) => {
        return(
          {id: food.id,
          name: food.name,
          calories: food.calories}
        )
      })
      this.setState({ foods: foods })
    })

    fetch('https://lower-goose-93602.herokuapp.com/api/v1/meals')
    .then(results => {
      return results.json();
    }).then(data => {
      let meals = data.map((meal) => {
        return(
          {id: meal.id,
          name: meal.name,
          foods: meal.foods}
        )
      })
      this.setState({ meals: meals })
    })

    fetch('https://polar-basin-91086.herokuapp.com/api/v1/recipes')
    .then(results => {
      return results.json();
    }).then(data => {
      let recipes = data.map((recipe) => {
        return(
          {id: recipe.id,
          name: recipe.recipeName,
          type: recipe.foodType,
          calories: recipe.caloriesPerServing,
          url: recipe.recipeUrl}
        )
      })
      this.setState({ recipes: recipes })
    })
  }


  addFood = (newFood) => {
    fetch('https://lower-goose-93602.herokuapp.com/api/v1/foods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ 'food': { 'name': newFood.name, 'calories': newFood.calories } })
    })
    .then(response => {
      if (response.status == 201) {
        this.setState({ foods: [...this.state.foods, newFood ] });
      }
    })
  }

  deleteFood = (id) => {
    fetch(`https://lower-goose-93602.herokuapp.com/api/v1/foods/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.status == 204) {
        const filteredFoods = this.state.foods.filter(food => food.id != id);
        this.setState({ foods: filteredFoods });
      }
    })
  }

  deleteMeal = (id) => {
    const filteredMeals = this.state.meals.filter(meal => meal.id != id);

    this.setState({ meals: filteredMeals });
  }

  displayFoods = event => {
    this.setState({ filter: "foods" })
  }

  displayMeals = event => {
    this.setState({ filter: "meals" })
  }

  displayRecipes = event => {
    this.setState({ filter: "recipes" })
  }


  render() {
      return(
        <main className='App'>
        <nav><button onClick={event => this.displayFoods(event)}>Foods</button> |
        <button onClick={event => this.displayMeals(event)}>Meals</button> |
        <button onClick={event => this.displayRecipes(event)}>Recipes</button></nav>
          <h1>Quantified Self</h1>
          {this.state.filter === 'foods' && <Form addFood={this.addFood} />}
          {this.state.filter === 'recipes' && <Recipes recipes={this.state.recipes} />}
          {this.state.filter === 'foods' && <Foods foods={this.state.foods} deleteFood={this.deleteFood} />}
          {this.state.filter === 'meals' && <Meals meals={this.state.meals} deleteMeal={this.deleteMeal} />}
        </main>
      )
    }
  }


export default App;
