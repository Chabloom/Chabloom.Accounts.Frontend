import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "@material-ui/core";

import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

import { createBrowserHistory } from "history";

import { AppInsightsInstrumentationKey } from "./settings/config";

import { Error, Register, SignIn, SignOut } from "./components";

import "./App.scss";

const browserHistory = createBrowserHistory({ basename: "" });
const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: AppInsightsInstrumentationKey,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory },
    },
  },
});
appInsights.loadAppInsights();

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
