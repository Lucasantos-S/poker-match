import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false as boolean);
  return (
    <nav className="relative">
      <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full ">
        <button
          onClick={() => {
            setIsMenuOpen((isMenuOpen) => !isMenuOpen);
          }}
          className="w-10 h-10 rounded-full text-lg text-gray-10 "
        >
          x
        </button>
      </div>
      {isMenuOpen && (
        <div className="w-44 h-32 flex justify-center bg-gray-30 rounded absolute top-7 left-10 animate-left">
          <ul className="flex items-center justify-center w-full h-full flex-col gap-4 p-5">
            <li className="w-full text-sm text-gray-0">
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to={""}
              >
                Home
              </Link>
            </li>
            <li className="w-full text-sm text-gray-0">
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to={"pokedex"}
              >
                Pokedex
              </Link>
            </li>
            <li className="w-full text-sm text-gray-0">
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to={"/"}
              >
                Sair
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
