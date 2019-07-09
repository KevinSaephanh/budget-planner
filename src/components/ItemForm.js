import React, { Component } from "react";

class ItemForm extends Component {
  state = {
    name: String,
    cost: Number
  };

  onChange = e => {
    if (e.target.name === "name") {
      this.setState({
        name: e.target.value
      });
    } else {
      this.setState({
        cost: parseFloat(e.target.value).toFixed(2)
      });
    }
  };

  onClick = e => {
    e.preventDefault();
    if (isNaN(this.state.cost)) {
      alert("You must enter a cost for the item");
    } else {
      const newItem = {
        name: this.state.name,
        cost: this.state.cost
      };
      this.props.onClick(newItem);
      this.refs.name.value = "";
      this.refs.cost.value = 0;
    }
  };

  render() {
    return (
      <div className="row">
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

export default ItemForm;
