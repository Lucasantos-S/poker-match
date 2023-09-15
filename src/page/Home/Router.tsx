import React from "react";
import { Route } from "react-router-dom";
import MobileProfile from "@/components/MobileProfile";
import Pokedex from "./Pokedex";

const pokemonRoutes = [
  <Route path="" element={<MobileProfile />} />,
  <Route path="pokedex" element={<Pokedex />} />,
];

export default pokemonRoutes;
