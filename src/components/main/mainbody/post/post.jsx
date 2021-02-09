import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPosts,
  getUsers,
  selectPost,
  selectUser,
} from "../../../../redax/reduserApi";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
  mainContent: {
    marginTop: theme.spacing(12),
  },
}));

const Post = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const database = useSelector(selectPost, selectUser);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <article>
      <div className={classes.articleContent}>
        {database.post.map((newpost) => {
          const user = database.user.find((item) => item.id === newpost.userId);

          return (
            <Container maxWidth="md">
              <Typography
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {newpost.title}
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {user.name}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                {newpost.body}
              </Typography>

              <div className={classes.articleButtons} align="center">
                <Link to="main/">
                  <Button variant="contained" color="primary">
                    To return
                  </Button>
                </Link>
              </div>
            </Container>
          );
        })}
      </div>
    </article>
  );
};

export default Post;
