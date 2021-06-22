import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Error, Profile, Register, SignIn, SignInCallback, SignOut, SignOutCallback } from "./components";
import { useAppContext } from "./AppContext";

export const AppRoutes: React.FC = () => {
  const { userManager } = useAppContext();

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/signin-oidc">
          <SignInCallback userManager={userManager} />
        </Route>
        <Route exact={true} path="/signout-oidc">
          <SignOutCallback userManager={userManager} />
        </Route>
        <Route exact={true} path="/account/signIn">
          <SignIn />
        </Route>
        <Route exact={true} path="/account/signOut">
          <SignOut />
        </Route>
        <Route exact={true} path="/account/register">
          <Register />
        </Route>
        <Route exact={true} path="/account/error">
          <Error />
        </Route>
        <Route exact={true} path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};
