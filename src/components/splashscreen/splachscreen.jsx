import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logotip: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
  },
}));

function SplachScreen() {
  const classes = useStyles();

  setTimeout('window.location = "/main";', 3000);

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Avatar
          variant="square"
          alt="Remy Sharp"
          src="https://gigalab.uz/images/technologies/7.png"
          className={classes.logotip}
        />
      </Grid>
    </div>
  );
}

export default SplachScreen;
