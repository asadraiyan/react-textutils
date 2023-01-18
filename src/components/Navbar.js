import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const {mode, setMode} = props

  const [modeText, setmodeText] = useState("Enable dark mode");
  const redBgHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setmodeText("Enable light mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setmodeText("Enable dark mode");
    }
  };
  return (
    <nav mode={mode}>
      <div className="navLink">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
      <div className="box">
        {modeText}
        <button className="mode" onClick={redBgHandler}>toggle</button>
      </div>
    </nav>
  );
}
