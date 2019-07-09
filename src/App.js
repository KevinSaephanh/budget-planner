import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateBudget from "./components/CreateBudget";
import MyBudget from "./components/MyBudget";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" component={CreateBudget} />
            <Route path="/:id" component={MyBudget} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
