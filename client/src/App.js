import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Index from "./pages/Index/Index";
import Profile from "./pages/Profile/Profile";
import withAuth from "./components/Auth/withAuth";
import UserContext from "./components/UserContext/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <UserContext.Provider>
            <Route exact path="/home" component={withAuth(Home)} />
            <Route exact path="/profile" component={withAuth(Profile)} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
