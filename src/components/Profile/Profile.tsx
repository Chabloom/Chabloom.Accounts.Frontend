import React from "react";
import { Button, createStyles, FormGroup, Grid, Paper, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useAppContext } from "../../common";
import { AccountsApi, AccountViewModel } from "../../api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(5),
    },
    mt1: {
      marginTop: theme.spacing(1),
    },
  })
);

export const Profile: React.FC = () => {
  // Initialize classes
  const classes = useStyles();
  const { userId, userToken } = useAppContext();

  // Initialize state variables
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    const getAccount = async () => {
      const api = new AccountsApi();
      const [ret, err] = await api.readItem(userToken, userId);
      if (ret && !err) {
        setName(ret.name);
        setEmail(ret.email);
        setPhoneNumber(ret.phoneNumber);
      }
    };
    getAccount().then();
  }, [userId, userToken]);

  return (
    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper className={classes.paper} elevation={3}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const setAccount = async () => {
                const api = new AccountsApi();
                const account = {
                  name,
                  email,
                  phoneNumber,
                } as AccountViewModel;
                const [ret, err] = await api.editItem(userToken, account);
                if (ret && !err) {
                  setName(ret.name);
                  setEmail(ret.email);
                  setPhoneNumber(ret.phoneNumber);
                }
              };
              setAccount().then();
            }}
          >
            <FormGroup>
              <TextField
                required
                variant="standard"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                variant="standard"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                variant="standard"
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button fullWidth className={classes.mt1} variant="contained" color="primary" type="submit">
                Save
              </Button>
            </FormGroup>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
