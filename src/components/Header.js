import React, { Component } from "react";
import logo from "../logo.png"; // Image from https://fontawesome.com/icons/dollar-sign?style=solid

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src={logo} width="40;" height="40;" alt="" />
          </a>
          <a className="navbar-brand" href="/">
            Home
          </a>
          <a className="navbar-brand" href="/create">
            Create Budget
          </a>
        </nav>
      </div>
    );
  }
}
