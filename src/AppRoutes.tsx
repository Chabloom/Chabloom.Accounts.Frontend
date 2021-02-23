import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Error, Register, SignIn, SignInCallback, SignOut, SignOutCallback } from "./components";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/signin-oidc">
          <SignInCallback />
        </Route>
        <Route exact={true} path="/signout-oidc">
          <SignOutCallback />
        </Route>
        <Route exact={true} path="/signIn">
          <SignIn />
        </Route>
        <Route exact={true} path="/signOut">
          <SignOut />
        </Route>
        <Route exact={true} path="/register">
          <Register />
        </Route>
        <Route exact={true} path="/error">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};
