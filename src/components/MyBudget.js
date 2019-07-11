import React, { Component } from "react";
import BudgetForm from "./BudgetForm";
import ItemForm from "./ItemForm";
import Table from "./Table";

class MyBudget extends Component {
  state = {};

  componentDidMount() {
    fetch(`http://localhost:3000/budgets/${this.props.match.params.id}`)
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

  onChange = e => {
    const target = e.target.name;
    if (target === "start" || target === "end") {
      const date = new Date(e.target.value);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate() +
        1}/${date.getFullYear()}`;

      this.setState({
        [target]: formattedDate
      });
    } else if (e.target.name === "budget") {
      this.setState({
        budget: parseFloat(e.target.value).toFixed(2)
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
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

    fetch(
      `http://localhost:3000/budgets/update/${this.props.match.params.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.state.title,
          budget: this.state.budget,
          start: this.state.start,
          end: this.state.end,
          items: items
        })
      }
    )
      .then(res => res.json())
      .then(() => console.log("Budget saved!"))
      .catch(err => console.log(err));

    window.location = "/";
  };

  onDeleteBudget = e => {
    fetch(`http://localhost:3000/budgets/${this.props.match.params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: this.props.match.params.id })
    })
      .then(res => res.json())
      .then(() => console.log("Budget deleted!"))
      .catch(err => console.log(err));

    window.location = "/";
  };

  render() {
    return (
      <div className="row">
        <h1>{this.state.title}</h1>
        <h3>Budget: ${this.state.budget}</h3>
        <h3>
          Start: {this.state.start} End: {this.state.end}
        </h3>
        <BudgetForm onChange={this.onChange} />
        <ItemForm onClick={this.onClick} />
        <Table
          items={this.state.items}
          onDelete={this.onDelete}
          onSave={this.onSave}
        />
        <button
          type="submit"
          onClick={this.onDeleteBudget}
          style={{ marginTop: 25 }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default MyBudget;
