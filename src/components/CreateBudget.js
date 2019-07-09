import React, { Component } from "react";
import BudgetForm from "./BudgetForm";
import ItemForm from "./ItemForm";
import Table from "./Table";

class CreateBudget extends Component {
  state = {
    title: String,
    budget: Number,
    start: Date,
    end: Date,
    items: []
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick = newItem => {
    let items = this.state.items;
    items.push(newItem);

    this.setState({
      items: items
    });
  };

  onDelete = items => {
    this.setState({
      items: items
    });
  };

  onSave = items => {
    if (this.state.start > this.state.end) {
      alert("Start date must be before end date");
      return;
    }

    const start = new Date(this.state.start);
    const end = new Date(this.state.end);
    const formattedStart = `${start.getMonth() + 1}/${start.getDate() +
      1}/${start.getFullYear()}`;
    const formattedEnd = `${end.getMonth() + 1}/${end.getDate() +
      1}/${end.getFullYear()}`;

    fetch("http://localhost:3000/budgets/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        budget: this.state.budget,
        start: formattedStart,
        end: formattedEnd,
        items: items
      })
    })
      .then(res => res.json())
      .then(() => console.log("Budget saved!"))
      .catch(err => console.log(err));

    window.location = "/";
  };

  render() {
    return (
      <div className="row">
        <h1>Let's Create a Budget Plan</h1>
        <BudgetForm onChange={this.onChange} />
        <ItemForm onClick={this.onClick} />
        <Table
          items={this.state.items}
          onDelete={this.onDelete}
          onSave={this.onSave}
        />
      </div>
    );
  }
}

export default CreateBudget;
