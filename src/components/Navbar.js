import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navLink">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
      <div className="box">
        <input type="text" placeholder="search here" autoComplete="off" />
        <button>Search</button>
      </div>
    </nav>
  );
}
