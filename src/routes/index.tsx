import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AuthRoutesComponent,
  loginRoutePath,
  worldsListRoutePath,
  worldsDetailRoutePath,
  WorldsRoutesComponent,
} from "./config";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path={loginRoutePath} component={AuthRoutesComponent} />
    <Route path={worldsListRoutePath} component={WorldsRoutesComponent} />
    <Route path={worldsDetailRoutePath} component={WorldsRoutesComponent} />
  </Switch>
);

export default AppRoutes;
