import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AuthRoutesComponent,
  loginRoutePath,
  worldsListRoutePath,
  worldsDetailRoutePath,
  WorldsRoutesComponent,
  worldsNewRoutePath,
  itemsDetailRoutePath,
  itemsListRoutePath,
  ItemsRoutesComponent,
  itemsNewRoutePath,
} from "./config";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path={loginRoutePath} component={AuthRoutesComponent} />
    <Route path={worldsListRoutePath} component={WorldsRoutesComponent} />
    <Route path={worldsDetailRoutePath} component={WorldsRoutesComponent} />
    <Route path={worldsNewRoutePath} component={WorldsRoutesComponent} />
    <Route path={itemsListRoutePath} component={ItemsRoutesComponent} />
    <Route path={itemsDetailRoutePath} component={ItemsRoutesComponent} />
    <Route path={itemsNewRoutePath} component={ItemsRoutesComponent} />
  </Switch>
);

export default AppRoutes;
