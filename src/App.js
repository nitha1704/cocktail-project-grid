import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {
  // Pages
  Home,
  Error,
  About,
  Contact,
  // Placeholder Pages
  CocktailSinglePageGrid,
  // Component
  Navbar
} from "./anchor";

// CSS
import "./css/style.css";
import "./css/cocktail-list-grid-style.css";
import "./css/responsive.css";

// Plugin
import "./plugins/bootstrap-4.0.0-dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cocktail/:id">
            <CocktailSinglePageGrid />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
