import React, { Component } from "react";

export default class AddItem extends Component {
  state = {
    name: String,
    cost: Number
  };

  onChange = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
          name: e.target.value
        });
        break;
      case "cost":
        this.setState({
          cost: parseFloat(e.target.value).toFixed(2)
        });
        break;
      default:
        break;
    }
  };

  onClick = e => {
    e.preventDefault();
    this.props.onClick(this.state);
    this.refs.name.value = "";
    this.refs.cost.value = "";
  };

  render() {
    return (
      <div>
        <h2>Add an Item</h2>
        <form>
          <label>Item:</label>
          <input
            type="text"
            placeholder="Enter item"
            name="name"
            ref="name"
            maxLength="15"
            onChange={this.onChange}
          />
          <label>Cost:</label>
          <input
            type="text"
            placeholder="Enter cost"
            name="cost"
            ref="cost"
            maxLength="15"
            onChange={this.onChange}
          />
          <button type="submit" onClick={this.onClick}>
            Add
          </button>
        </form>
        <h2>Expected Purchases/Payments</h2>
      </div>
    );
  }
}
