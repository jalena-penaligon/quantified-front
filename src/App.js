import React, { Component } from 'react';
import Foods from './Foods';
import Meals from './Meals';
import Form from './Form';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [],
      meals: []
    }
  }

  componentWillMount () {
    fetch('http://localhost:4000/api/v1/foods')
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
      console.log(foods)
      this.setState({ foods: foods })
      console.log("state", this.state.foods)
    })

    fetch('https://lower-goose-93602.herokuapp.com/api/v1/meals')
    .then(results => {
      return results.json();
    }).then(data => {
      let meals = data.map((meal) => {
        return(
          {id: meal.id,
          name: meal.name}
        )
      })
      console.log(meals)
      this.setState({ meals: meals })
      console.log("state", this.state.meals)
    })
  }


  addFood = (newFood) => {
    fetch('http://localhost:4000/api/v1/foods', {
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
    fetch(`http://localhost:4000/api/v1/foods/${id}`, {
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
    console.log(id);
    const filteredMeals = this.state.meals.filter(meal => meal.id != id);

    this.setState({ meals: filteredMeals });
  }

  displayFoods = event => {
    this.setState({ meals: [] })
    this.setState({ foods: this.state.foods })
  }
  displayMeals = event => {
    this.setState({ meals: this.state.meals })
    this.setState({ foods: [] })
  }


  render() {
      return(
        <main className='App'>
        <nav><button onClick={event => this.displayFoods(event)}>Foods</button> |
        <button onClick={event => this.displayMeals(event)}>Meals</button> |
        <button onClick={event => this.displayRecipes(event)}>Recipes</button></nav>
          <h1>Quantified Self</h1>
          <Form addFood={this.addFood} />
          <Foods foods={this.state.foods} deleteFood={this.deleteFood} />
          <Meals meals={this.state.meals} deleteMeal={this.deleteMeal} />
        </main>
      )
    }
  }


export default App;
