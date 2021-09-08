import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./page/MainPage";

const App = () => {
  console.log("App.js");
  return (
    <Router>
      <Switch>
        <Route exact component={MainPage} path="/" />
      </Switch>
    </Router>
  );
};

export default App;
