import React from "react";

const BudgetForm = props => {
  return (
    <div className="row">
      <form className="form-budget">
        <p>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter title"
            name="title"
            maxLength="15"
            onChange={props.onChange}
          />
        </p>
        <p>
          <label>Budget:</label>
          <input
            type="text"
            placeholder="Enter budget"
            name="budget"
            maxLength="10"
            onChange={props.onChange}
          />
        </p>
        <p>
          <label>Start:</label>
          <input
            type="date"
            name="start"
            maxLength="10"
            onChange={props.onChange}
          />
        </p>
        <p>
          <label>End:</label>
          <input
            type="date"
            name="end"
            maxLength="10"
            onChange={props.onChange}
          />
        </p>
      </form>
    </div>
  );
};

export default BudgetForm;
