import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetails from "./routes/RestaurantDetails";
import UpdatePage from "./routes/UpdatePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/restaurants/:id/update">
          <UpdatePage />
        </Route>
        <Route exact path="/details/:id">
          <RestaurantDetails />
        </Route>
      </Switch>
    </Router>
  );
}
