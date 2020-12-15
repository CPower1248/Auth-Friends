import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Login from "./components/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <h1>-Friends-</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
