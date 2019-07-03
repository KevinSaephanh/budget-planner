import React, { Component } from "react";

export default class BudgetForm extends Component {
  render() {
    return (
      <div>
        <form className="form-budget">
          <p>
            <label>Title:</label>
            <input
              type="text"
              placeholder="Enter title"
              name="title"
              maxLength="15"
              onChange={this.props.onChange}
            />
          </p>
          <p>
            <label>Budget:</label>
            <input
              type="text"
              placeholder="Enter budget"
              name="budget"
              maxLength="10"
              onChange={this.props.onChange}
            />
          </p>
          <p>
            <label>Start:</label>
            <input
              type="date"
              name="start"
              maxLength="10"
              onChange={this.props.onChange}
            />
          </p>
          <p>
            <label>End:</label>
            <input
              type="date"
              name="end"
              maxLength="10"
              onChange={this.props.onChange}
            />
          </p>
        </form>
      </div>
    );
  }
}
