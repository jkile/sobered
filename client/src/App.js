import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Index from "./pages/Index/Index";
import Profile from "./pages/Profile/Profile";
import withAuth from "./components/Auth/withAuth";
import UserContext from "./components/UserContext/UserContext";

function App() {
  const [userState, setUserState] = useState({
    userId: "",
    username: "",
    thumbnail: "",
    authenticated: false,
    onLogin: (userId, username, thumbnail, authenticated) => {
      setUserState({
        ...userState,
        userId,
        username,
        thumbnail,
        authenticated,
      });
    },
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={userState}>
            <Route exact path="/" component={Index} />
            <Route path="/home" component={withAuth(Home)} />
            <Route exact path="/profile" component={withAuth(Profile)} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
