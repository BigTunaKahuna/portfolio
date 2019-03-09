import React, { Component } from "react";
import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";

import Home from "./Containers/Home/Home";
import Github from "./Containers/Github/Github";
import Contact from "./Containers/Contact/Contact";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/github" component={Github} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    );
    return <div className={styles.Wrapper}>{routes}</div>;
  }
}

export default App;
