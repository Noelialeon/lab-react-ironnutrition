import React from 'react';
import 'bulma/css/bulma.css';

import './style.css';

export default class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    }
  }

  handleChange(event) {
    let v = event.target.value
    this.setState({ qty: v })
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img alt="food" src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.qty}
                  onChange={(event) => { this.handleChange(event) }}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => { this.props.onClick(this.props.food, this.state.qty) }}
                >
                  +
                </button>
              </div>
              <button
                className="delete"
                onClick={() => { this.props.onRemove(this.props.food) }}
              >
                X
                </button>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
