import {Link, Switch, Route, HashRouter as Router } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import AboutProduct from "./Pages/AboutProduct.jsx";
import Page404 from './Pages/404.jsx'

import "./App.css";
import "./Assets/Logos/TrigoMathLogo.webp";

export default function app() {
  return (
    <Router >
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/404" component={Page404}>
          <Page404/>
        </Route>
        
        <Route exact path="/" component={HomePage}>
          <HomePage />
        </Route>

        <Route exact path="/cachiang-react" component={HomePage}>
          <HomePage />
        </Route>
        
        <Route exact path="/me" component={AboutMe}>
          <AboutMe />
        </Route>
        
        
        
      </Switch>
    </Router>
  );
}
