import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import SwitchTheme from "./SwitchTheme";

const Router = () => {
  return (
    <BrowserRouter>
      <SwitchTheme />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Projects} path="/project/:id" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
