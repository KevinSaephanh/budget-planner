import React from "react";
import logo from "../logo.png"; // Image from https://fontawesome.com/icons/dollar-sign?style=solid

const Header = () => {
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
};

export default Header;
