import React, { Component } from "react";
import Table from "./Table";

export default class MyBudget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: String,
      budget: Number,
      start: Date,
      end: Date
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/budgets/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.title,
          budget: data.budget,
          start: data.start,
          end: data.end
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
      .then(data => console.log(data))
      .catch(err => console.log(err));

    window.location = "/";
  };

  render() {
    return (
      <div>
        <Table items={this.state} onSave={this.onSave} />
      </div>
    );
  }
}
