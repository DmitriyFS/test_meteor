import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main/main";
import Post from "./components/main/mainbody/post/post";
import SplachScreen from "./components/splashscreen/splachscreen";

const App = (props) => {
  return (
    <div>
      <Route exact path="/" render={() => <SplachScreen />} />
      <Route exact path="/main" render={() => <Main />} />
      <Route exact path="/post" render={() => <Post />} />
    </div>
  );
};

export default App;
