import React, { Component } from "react";

export default class BudgetService extends Component {
  read(callback) {
    fetch("http://localhost:3000/budgets", {
      method: "GET"
    })
      .then(res => callback(res.data))
      .catch(err => {
        console.log(err);
        callback(null);
      });
  }

  create(data, callback) {
    fetch("http://localhost:3000/budgets/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        budget: data.budget,
        start: data.start,
        end: data.end,
        items: data.items
      })
    })
      .then(res => {
        callback();
      })
      .catch(err => {
        console.log(err);
        callback();
      });
  }

  update(data, id, callback) {
    fetch(`http://localhost:3000/budgets/update/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        budget: data.budget,
        start: data.start,
        end: data.end,
        items: data.items
      })
    })
      .then(res => {
        console.log("Budget updated");
        callback();
      })
      .catch(res => {
        callback();
      });
  }

  delete(id, callback) {
    fetch(`http://localhost:3000/budgets/${id}`)
      .then(res => {
        callback();
      })
      .catch(res => {
        console.log("Error in delete attempt");
        callback();
      });
  }
}
