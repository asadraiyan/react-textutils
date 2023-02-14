
import React, { useState } from "react";
import "./App.css";
import "./styles/Home.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }

  return (
    <Router>
      <div className="App">
        <Navbar
          mode={mode}
          setMode={setMode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home mode={mode} showAlert={showAlert} />} />
          <Route exact path="/About" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
