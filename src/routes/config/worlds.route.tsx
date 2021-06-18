import React from "react";
import { Route, Switch } from "react-router-dom";
import { List, Detail } from "../../pages/Worlds";

export const worldsListRoutePath = "/worlds";
export const worldsDetailRoutePath = "/worlds/:id/edit";
export const worldsNewRoutePath = "/worlds/new";

export const WorldsRoutesComponent: React.FC = () => (
  <Switch>
    <Route path={worldsListRoutePath} component={List} exact />
    <Route path={worldsDetailRoutePath} component={Detail} exact />
    <Route path={worldsNewRoutePath} component={Detail} exact />
  </Switch>
);
