import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";

import { Home, Contacts, Posts, Photos } from "../pages";

const RouteSchema = () => (
  <Router>
    <Switch>
      <Navigation exact path="/" component={Home} />
      <Navigation exact path="/posts" component={Posts} />
      <Navigation exact path="/photos" component={Photos} />
      <Navigation exact path="/contacts" component={Contacts} />

      <Route exact component={() => <h1 className="text-center"> 404 </h1>} />
    </Switch>
  </Router>
);

export default RouteSchema;
