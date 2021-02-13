import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"

function App() {
  return (
    <Router>
      <div className="App">
        <h1>-Friends-</h1>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends List(PP)</Link>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
