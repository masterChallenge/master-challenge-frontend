import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Challenge from "../pages/Challenge";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/challenge/:pid" component={Challenge} />
        <Route component={NotFound} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
