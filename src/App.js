import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateBudget from "./components/CreateBudget";
import MyBudget from "./components/MyBudget";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/create" component={CreateBudget} />
          <Route path="/:id" component={MyBudget} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
