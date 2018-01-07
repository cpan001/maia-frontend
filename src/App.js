import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
