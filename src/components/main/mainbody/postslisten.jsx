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
import { NavLink } from "react-router-dom";

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

  const database = useSelector(selectPost, selectUser);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <main>
      <div className={classes.mainContent}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {database.post.map((newpost) => {
              const user = database.user.find(
                (item) => item.id === newpost.userId
              );

              return (
                <Grid item key={newpost.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <NavLink to={"main/" + newpost.id}>
                        <Link variant="h6" gutterBottom>
                          {newpost.title}
                        </Link>
                      </NavLink>
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
