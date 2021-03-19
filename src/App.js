import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Component/Home'
import NavBar from "./Component/NavBar";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <NavBar />
          </nav>

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
