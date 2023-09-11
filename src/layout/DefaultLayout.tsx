import React from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="w-screen h-screen flex justify-between">
      <Outlet />
    </div>
  );
}
