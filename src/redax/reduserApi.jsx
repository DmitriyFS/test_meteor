import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ReduserApi = createSlice({
  name: "state",
  initialState: {
    post: [],
    user: [],
  },
  reducers: {
    savePostsData: (state, action) => {
      state.post = action.payload.data;
    },
    saveUsersData: (state, action) => {
      state.user = action.payload.data;
    },
  },
});

export const { savePostsData } = ReduserApi.actions;
export const { saveUsersData } = ReduserApi.actions;

export const getPosts = (data) => (dispatch, getState) => {
  const state = getState();
  console.log("POSTS", data, state);
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)

    .then((response) => {
      dispatch(savePostsData(response));
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
};

export const getUsers = (data) => (dispatch, getState) => {
  const state = getState();
  console.log("USERS", data, state);
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

export const selectPost = (state) => state.data;
export const selectUser = (state) => state.data;

export default ReduserApi.reducer;
