import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@/Routes";
export default function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
