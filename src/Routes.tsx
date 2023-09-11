import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Switch>
  );
}
