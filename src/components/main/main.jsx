import React from "react";
import Header from "./header/header";
import { makeStyles } from "@material-ui/core/styles";
import PostsListen from "./mainbody/postslisten";
import Post from "./mainbody/post/post";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Main = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header />
      <PostsListen />
      <Post />
    </div>
  );
};

export default Main;
