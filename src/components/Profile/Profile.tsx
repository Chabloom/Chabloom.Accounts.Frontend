import React from "react";
import { Button, FormGroup, Grid, Paper, TextField, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

import { AccountsApi, AccountViewModel } from "../../api";
import { useAppContext } from "../../AppContext";

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
      const success = await api.read(userId, userToken);
      if (success) {
        const ret = api.data() as AccountViewModel;
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
                  id: userId,
                  name,
                  email,
                  phoneNumber,
                } as AccountViewModel;
                const success = await api.update(userId, account, userToken);
                if (success) {
                  const ret = api.data() as AccountViewModel;
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
