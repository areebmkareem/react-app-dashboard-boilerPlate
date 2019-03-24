import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { Route } from "react-router-dom";
import RoutesArray from "./routes/RoutesArray";
import Home from "./components/home/Home";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
      </Fragment>
    );
  }
}

export default App;
