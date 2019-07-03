import React, { Component } from "react";
import BudgetForm from "./BudgetForm";
import Table from "./Table";

export default class CreateBudget extends Component {
  state = {
    title: String,
    budget: Number,
    start: Date,
    end: Date
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSave = items => {
    fetch("http://localhost:3000/budgets/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        budget: this.state.budget,
        start: this.state.start,
        end: this.state.end,
        items: items
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    window.location = "/";
  };

  render() {
    return (
      <div className="row">
        <h1>Let's Create a Budget Plan</h1>
        <BudgetForm onChange={this.onChange} />
        <Table onSave={this.onSave} />
      </div>
    );
  }
}
