import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@/Routes";
import { PokemonContextProvider } from "./context/PokemonContext";
export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <PokemonContextProvider>
        <Router>
          <Routes />
        </Router>
      </PokemonContextProvider>
    </div>
  );
}
