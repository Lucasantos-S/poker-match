import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@/Routes";
import { PokemonContextProvider } from "./context/PokemonContext";
export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <DndProvider backend={HTML5Backend}>
        <PokemonContextProvider>
          <Router>
            <Routes />
          </Router>
        </PokemonContextProvider>
      </DndProvider>
    </div>
  );
}
