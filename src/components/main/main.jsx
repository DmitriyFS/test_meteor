import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostsListen from "./mainbody/postslisten";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Main = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <PostsListen />
    </div>
  );
};

export default Main;
