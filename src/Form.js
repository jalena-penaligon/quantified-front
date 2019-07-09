import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super ();
    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  submitFood = event => {
    event.preventDefault();
    const newFood = {
      id: Date.now(),
      ...this.state
    }
    this.props.addFood(newFood);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: '', description: '' })
  }

  render () {
    return(
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Calories'
          name='calories'
          value={this.state.calories}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitFood(event)}>SUBMIT</button>
      </form>
    )
  }
}
 export default Form;
