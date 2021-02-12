import {
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import {
  getPosts,
  getUsers,
  selectPost,
  selectUser,
} from "../../../redax/reduserApi";
import { useDispatch, useSelector } from "react-redux";

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

const PostsListen = (props) => {
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

  if (!posts) {
    return <div></div>;
  }

  if (!users) {
    return <div></div>;
  }

  return (
    <main>
      <div className={classes.mainContent}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {posts.map((newposts) => {
              const user =
                users.find((item) => item.id === newposts.userId) || {};

              return (
                <Grid item key={newposts.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Link
                        variant="h6"
                        gutterBottom
                        href={"main/" + newposts.id}
                      >
                        {newposts.title}
                      </Link>
                      <Typography>{user.name}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </main>
  );
};

export default PostsListen;
