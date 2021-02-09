import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  menuAvatar: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Avatar
            alt="logo"
            src="https://gigalab.uz/images/technologies/7.png"
            className={classes.menuAvatar}
          ></Avatar>
          <Typography variant="h5" className={classes.title}>
            I Want To Work As a Programmer
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
