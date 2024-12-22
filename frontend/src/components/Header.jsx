import React from "react";
import { Link } from "react-router-dom";
import logoMark from "../assets/logomark.png"

const Header = () => {
  return (
    <header className="bg-primary-dark text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <img className="mx-2" src={logoMark} alt="contains green circle to represent OptionsAI logo" width={35} />
          <Link to="/" className="text-xl font-bold">
            Options AI
          </Link>
        </div>
        <nav>
          <Link to="/" className="px-4 hover:text-primary-accent">Home</Link>
          <Link to="/dashboard" className="px-4 hover:text-primary-accent">Dashboard</Link>
          <Link to="/options" className="px-4 hover:text-primary-accent">Options</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;