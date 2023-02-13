import React, { useState } from "react";

export default function Home({ mode }) {
  const [text, setText] = useState("");

  const lightBack = {
    backgroundColor: "white",
    color: "black"
  }

  const DarkBack = {
    backgroundColor: "#272727",
    color: "white"
  }

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

  const extraSpacesHandler = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const copyTextHandler = () => {
    navigator.clipboard.writeText(text)
  }

  const changetext = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="big-container">
        <div className="main-container">
          <h1>Enter the text to analyse below:</h1>
          <textarea
            name="form"
            className="text"
            value={text}
            onChange={changetext}
            rows="10"
            style={mode === "light" ? lightBack : DarkBack}

          ></textarea>
          <div className="btncont">
            <button className="btn" onClick={upperCaseHandler} disabled={text.length === 0 ? true : false}>
              Convert to Uppercase
            </button>
            <button className="btn1" onClick={lowerCaseHandler} disabled={text.length === 0 ? true : false}>
              Convert to Lowercase
            </button>
            <button className="btn2" onClick={clearTextHandler} disabled={text.length === 0 ? true : false}>
              Clear text
            </button>
            <button className="btn3" onClick={extraSpacesHandler} disabled={text.length === 0 ? true : false}>
              Remove extra spaces
            </button>
            <button className="btn" onClick={copyTextHandler} disabled={text.length === 0 ? true : false}>
              Copy Text
            </button>
          </div>
        </div>
        <div className="container">
          <h1 className="heading">Your text summary</h1>
          <p className="words-characters">
            {text ? text.split(/\s+/).length : 0} words, {text.length} characters
          </p>
          <p className="read">{text ? 0.008 * text.split(/\s+/).length : 0} Minutes to read</p>
          <h2 className="preview">Preview</h2>
          <p className="preview-text">{text}</p>
        </div>
      </div>
    </>
  );
}
