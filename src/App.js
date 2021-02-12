import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/main/header/header";
import Main from "./components/main/main";
import Post from "./components/main/mainbody/post/post";
import SplachScreen from "./components/splashscreen/splachscreen";

const App = (props) => {
  return (
    <div>
      <Route exact path="/" render={() => <SplachScreen />} />
      <Header />
      <Switch>
        <Route exact path="/main" render={() => <Main />} />
        <Route path="/main/:id" render={() => <Post />} />
      </Switch>
    </div>
  );
};

export default App;
