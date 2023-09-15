import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import pokemonRoutes from "./page/Home/Router";

export default function Routes() {
  return (
    <Switch>
      <Route path="/Home" element={<Home />}>
        {...pokemonRoutes}
      </Route>
      <Route path="/" element={<Login />} />
    </Switch>
  );
}
