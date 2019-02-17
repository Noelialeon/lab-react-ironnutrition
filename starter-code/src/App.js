import React from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox.js'
import Search from './Search.js'

import './style.css';
import foods from './foods.json'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods.slice(),
      search: "",
      todaysFoods: []
    }
  }

  handleClick(food, qty) {
    let todaysFoods = this.state.todaysFoods.slice();
    todaysFoods.find(item => item.name === food.name) ?
      todaysFoods.map(el => { return el.name === food.name ? el.qty = qty : el }) : todaysFoods.push({ ...food, qty });
    this.setState({
      todaysFoods
    })
  }

  handleRemove(food, qty) {
    let totalFood = this.state.foods
    totalFood.splice(this.state.foods.indexOf(food), 1)
    this.setState({ foods: totalFood })
  }

  displayFoods(search) {
    search = search.toUpperCase();
    let result = [];
    for (let i = 0; i < this.state.foods.length; i++) {
      if (this.state.foods[i].name.toUpperCase().indexOf(search) !== -1) {
        result.push(
          <FoodBox key={i} food={this.state.foods[i]} onClick={this.handleClick.bind(this)} onRemove={this.handleRemove.bind(this)} />
        )
      }
    }
    return result;
  }

  displaySelectedFoods() {
    let result = [];
    for (let i = 0; i < this.state.todaysFoods.length; i++) {
      result.push(
        <li key={i}>{this.state.todaysFoods[i].qty} {this.state.todaysFoods[i].name} = {this.state.todaysFoods[i].qty * this.state.todaysFoods[i].calories} cal</li>
      )
    }

    return result;
  }

  displaySelectedFoodsTotCal() {
    let result = 0;
    for (let i = 0; i < this.state.todaysFoods.length; i++) {
      result += this.state.todaysFoods[i].qty * this.state.todaysFoods[i].calories;
    }
    return result;
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Search search={this.state.search} onChange={(e) => { this.setState({ search: e.target.value }) }} />
        <div className="columns">
          <div className="column">
            {this.displayFoods(this.state.search)}
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {this.displaySelectedFoods()}
            </ul>
            Total: {this.displaySelectedFoodsTotCal()} cal
          </div>
        </div>
      </div>
    );
  }
}

