import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [btntext, setBtntext] = useState("Enable dark mode");
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const upperCaseHandler = () => {
    // console.log("Uppercase was clicked" + text)
    const newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCaseHandler = () => {
    // console.log("Lowercase was clicked" + text)
    const newText = text.toLowerCase();
    setText(newText);
  };
  const clearTextHandler = () => {
    // console.log("cleartext was clicked" + text)
    setText("");
  };

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtntext("Enable light mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("Enable dark mode");
    }
  };

  const copyTextHandler = () => {
    navigator.clipboard.writeText(text)
  }

  const changetext = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <h1>Enter the text to analyze below</h1>
        <textarea
          name="form"
          className="text"
          value={text}
          onChange={changetext}
          rows="10"
          style={myStyle}
          // style={{color: "red"}}
        ></textarea>
        <div className="btncont">
          <button className="btn" onClick={upperCaseHandler}>
            Convert to Uppercase
          </button>
          <button className="btn1" onClick={lowerCaseHandler}>
            Convert to Lowercase
          </button>
          <button className="btn2" onClick={clearTextHandler}>
            Clear text
          </button>
          <button className="btn3" onClick={toggleStyle}>
            {btntext}
          </button>
          <button className="btn" onClick={copyTextHandler}>
            Copy Text
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text ? text.split(/\s+/).length : 0} words, {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
