// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "./styles/Home.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";


function App() {
  const [mode, setMode] = useState("light");
  return (
    <Router>
      <div className="App">
        <Navbar
          mode={mode}
          setMode={setMode}
        />
        <Routes>
          <Route exact path="/" element={<Home mode={mode} />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
