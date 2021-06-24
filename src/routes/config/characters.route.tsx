import React from "react";
import { Route, Switch } from "react-router-dom";
import { List, Detail } from "../../pages/Characters";

export const charactersListRoutePath = "/characters";
export const charactersDetailRoutePath = "/characters/:id/edit";
export const charactersNewRoutePath = "/characters/new";

export const CharactersRoutesComponent: React.FC = () => (
  <Switch>
    <Route path={charactersListRoutePath} component={List} exact />
    <Route path={charactersDetailRoutePath} component={Detail} exact />
    <Route path={charactersNewRoutePath} component={Detail} exact />
  </Switch>
);
