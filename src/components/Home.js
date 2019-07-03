import React, { Component } from "react";

export default class ExpensesList extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit() {
    fetch(`http://localhost:3000/budgets/${this.state.title}`).then(res =>
      console
        .log(res.json())
        .then(() => {
          window.location = `/`;
        })
        .catch(err => console.log(err))
    );
  }

  render() {
    return (
      <div className="row">
        <h1>Welcome to Budget Planner</h1>
        <h2>Find Your Budget Here</h2>
        <form>
          <div className="form-group" />
          <label>Budget Title:</label>
          <input
            type="text"
            placeholder="Enter budget title"
            maxLength="15"
            name="budgetTitle"
            onChange={this.onChange}
          />
          <button type="submit" name="search" onClick={this.onClick}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
