import React from "react";
import { Route, Switch } from "react-router-dom";
import { List, Detail } from "../../pages/Items";

export const itemsListRoutePath = "/items";
export const itemsDetailRoutePath = "/items/:id/edit";
export const itemsNewRoutePath = "/items/new";

export const ItemsRoutesComponent: React.FC = () => (
  <Switch>
    <Route path={itemsListRoutePath} component={List} exact />
    <Route path={itemsDetailRoutePath} component={Detail} exact />
    <Route path={itemsNewRoutePath} component={Detail} exact />
  </Switch>
);
