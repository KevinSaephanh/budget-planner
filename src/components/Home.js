import React, { Component } from "react";

class Home extends Component {
  state = {
    title: String
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onClick = e => {
    e.preventDefault();
    fetch("http://localhost:3000/budgets/")
      .then(res => res.json())
      .then(data => {
        const index = data.findIndex(budget => {
          return budget.title === this.state.title;
        });

        window.location = `/${data[index]._id}`;
      })
      .catch(err => console.log(err));
  };

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
            name="title"
            onChange={this.onChange}
          />
          <button type="submit" onClick={this.onClick}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
