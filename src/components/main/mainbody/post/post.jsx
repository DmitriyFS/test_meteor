import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
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

  const posts = useSelector(selectPost);
  const users = useSelector(selectUser);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, []);

// ___________________________________________________________________________
 // const { params } = useParams();
  // console.log(params);
  // const post = posts.find((item) => item.id === params.id);
  // console.log(post);
  //__________________________________________________________________________
  // Пробовал производить фильтрацию отрисовки через useParams() и find



  if (!posts) {
    return <div></div>;
  }

  if (!users) {
    return <div></div>;
  }

  return (
    <article>
      <div className={classes.articleContent}>
        {posts.map((newposts) => {
          const user = users.find((item) => item.id === newposts.userId) || {};

          return (
            <Container maxWidth="md">
              <Typography
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                {newposts.title}
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
                {newposts.body}
              </Typography>

              <div className={classes.articleButtons} align="center">
                <Button href="/main" variant="contained" color="primary">
                  To return
                </Button>
              </div>
            </Container>
          );
        })}
      </div>
    </article>
  );
};

export default Post;
