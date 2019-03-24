import React, { Component, Fragment } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

class Login extends Component {
  render() {
    return (
      <Grid
        container
        style={{ minHeight: "100vh" }}
        direction="column"
        justify="center"
        alignContent="center"
        spacing={16}
      >
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="h3">Explore</Typography>
        </Grid>
        <Grid item>
          <TextField
            style={{ margin: 0 }}
            type="email"
            variant="outlined"
            margin="normal"
            label="User Name"
          />
        </Grid>
        <Grid item>
          <TextField
            style={{ margin: 0 }}
            type="password"
            variant="outlined"
            margin="normal"
            label="Password"
          />
        </Grid>
        <Grid item>
          <Button fullWidth color="primary" variant="contained">
            Sign In
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
