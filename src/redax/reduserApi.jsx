import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ReduserApi = createSlice({
  name: "state",
  initialState: {
    posts: [],
    users: [],
  },
  reducers: {
    savePostsData: (state, action) => {
      state.posts = action.payload.data;
    },
    saveUsersData: (state, action) => {
      state.users = action.payload.data;
    },
  },
});

export const { savePostsData } = ReduserApi.actions;
export const { saveUsersData } = ReduserApi.actions;

export const getPosts = () => (dispatch, getState) => {
  const state = getState();
  console.log("POSTS", state);
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)

    .then((response) => {
      dispatch(savePostsData(response));
      console.log("SUCCESS", response);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
};

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  console.log("USERS", state);
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)

    .then((response) => {
      dispatch(saveUsersData(response));
      console.log("SUCCESS", response);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
};

export const selectPost = (state) => state.data.posts;
export const selectUser = (state) => state.data.users;

export default ReduserApi.reducer;
