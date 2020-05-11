import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
