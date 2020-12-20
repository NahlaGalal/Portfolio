import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import SwitchTheme from "./SwitchTheme";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <SwitchTheme />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Project} path="/project/:id" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
