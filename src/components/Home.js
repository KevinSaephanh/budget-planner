import React, { Component } from "react";

class Home extends Component {
  state = {
    budgets: [],
    searchWord: String
  };

  componentDidMount() {
    fetch("http://localhost:3000/budgets/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          budgets: data
        });
      })
      .catch(err => console.log(err));
  }

  onChange = e => {
    this.setState({
      searchWord: e.target.value
    });
  };

  onClick = e => {
    const budgets = this.state.budgets;
    const myBudget = e.target.id.toString().toLowerCase();
    const index = budgets.findIndex(budget => {
      const formattedBudget = budget.title.toString().toLowerCase();

      if (e.target.name === "search") {
        const searchWord = this.state.searchWord.toString().toLowerCase();
        return formattedBudget === searchWord;
      } else {
        return formattedBudget === myBudget;
      }
    });

    window.location = `/${budgets[index]._id}`;
  };

  render() {
    const budgets = this.state.budgets.map((budget, i) => {
      return (
        <li key={i} id={budget.title} onClick={this.onClick}>
          {i + 1}. {budget.title} ${budget.budget}
        </li>
      );
    });

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
            name="searchWord"
            onChange={this.onChange}
          />
          <button type="submit" name="search" onClick={this.onClick}>
            Search
          </button>
        </form>
        <h3>Or Choose From Budgets Below</h3>
        <ul>{budgets}</ul>
      </div>
    );
  }
}

export default Home;
