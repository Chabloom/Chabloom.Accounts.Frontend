import React from "react";

import {createStyles, Grid, LinearProgress, Paper, Theme, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";

import {ApplicationConfig} from "../settings";

import logo from "../logo.svg"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(5),
        },
        mt1: {
            marginTop: theme.spacing(1),
        }
    }),
);

export const Logout: React.FC = (props) => {
    // Initialize classes
    const classes = useStyles();

    // Initialize state variables
    const [error, setError] = React.useState("");
    const [processing, setProcessing] = React.useState(false);

    // Get parameters and return URL
    let params = new URLSearchParams(window.location.search);
    let returnUrl = params.get("ReturnUrl");

    fetch(`${ApplicationConfig.apiPublicAddress}/api/authentication/logout`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(value => {
        if (value.status === 200 && returnUrl) {
            window.location.replace(returnUrl);
        }
    }).catch(reason => {
        setError(reason.message);
    }).finally(() => setProcessing(false));

    return (
        <Grid item xs={12} sm={8} md={4}>
            <Paper className={classes.paper} elevation={3}>
                <img src={logo} className="logo" alt="logo"/>
                <Typography variant="h5">Sign out</Typography>
                <Typography>Hang on a moment while we sign you out.</Typography>
                {error &&
                <Alert className={classes.mt1} severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
                }
                {processing &&
                <LinearProgress className={classes.mt1}/>
                }
            </Paper>
        </Grid>
    );
}
