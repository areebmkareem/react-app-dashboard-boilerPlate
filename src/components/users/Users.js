import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import UsersTable from "./UsersTable";

class Users extends Component {
  render() {
    return (
      <Grid container direction="column" spacing={8}>
        <Grid item>
          <Typography variant="h5">Users</Typography>
        </Grid>

        <Grid item>
          <UsersTable />
        </Grid>
      </Grid>
    );
  }
}

export default Users;
