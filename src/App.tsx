import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "@material-ui/core";

import { Error, Register, SignIn, SignOut } from "./components";

import "./App.scss";

export const App: React.FC = () => {
  return (
    <Router>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signOut">
            <SignOut />
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
};
