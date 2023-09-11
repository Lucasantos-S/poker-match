import React from "react";
import MobileProfile from "./components/MobileProfile";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
export default function App() {
  return (
    <div className="overflow-y-hidden min-w-[800px]">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
