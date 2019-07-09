import React, { Component } from "react";
import Table from "./Table";

class MyBudget extends Component {
  state = {
    title: String,
    budget: Number,
    start: Date,
    end: Date,
    items: []
  };

  componentDidMount() {
    fetch(`http://localhost:5000/budgets/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.title,
          budget: data.budget,
          start: data.start,
          end: data.end,
          items: data.items
        });
      })
      .catch(err => console.log(err));
  }

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
      .then(() => console.log("Budget saved!"))
      .catch(err => console.log(err));

    window.location = "/";
  };

  render() {
    return (
      <div className="row">
        <Table onSave={this.onSave} />
      </div>
    );
  }
}

export default MyBudget;
