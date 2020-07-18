import React from "react";
import "./index.css";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FooterPage from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      <FooterPage/>
    </div>
    </BrowserRouter>
  );
};

export default App;
