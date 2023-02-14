import React, { useState } from "react";
import "../styles/About.css"

export default function About({ mode }) {
  const [showCard1, setShowCard1] = useState(false)
  const [showCard2, setShowCard2] = useState(false)
  const [showCard3, setShowCard3] = useState(false)
  const lightBack = {
    backgroundColor: "white",
    color: "black"
  }

  const DarkBack = {
    backgroundColor: "#272727",
    color: "white"
  }
  return (
    <div className="wrapper">
      <div className="accordion">
        <h1 className="about" >About App</h1>
        <div className="item">
          <div className="boxes" style={mode === "light" ? lightBack : DarkBack}>
            <h2 className="headings">Analyse your text</h2>
            <button className="up-down" onClick={() => { setShowCard1(!showCard1) }} >{showCard1 ? "-" : "+"}</button>
          </div>
          {
            showCard1 && <p className="content" style={mode === "light" ? lightBack : DarkBack}>
              Textutils gives you a way to analyse your text quickly and efficently. It lets you to count words, count characters with reading time required. It has both light and dark mode for better look.
            </p>
          }

        </div>
        <div className="item">
          <div className="boxes" style={mode === "light" ? lightBack : DarkBack}>
            <h2 className="headings">Free to use</h2>
            <button className="up-down" onClick={() => { setShowCard2(!showCard2) }}>{showCard2 ? "-" : "+"}</button>
          </div>
          {
            showCard2 && <p className="content" style={mode === "light" ? lightBack : DarkBack}>
              TextUtils is a free character counter tool that provided instant character count and word count statics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with word / character limit.
            </p>
          }

        </div>
        <div className="item">
          <div className="boxes" style={mode === "light" ? lightBack : DarkBack}>
            <h2 className="headings">Browser compatible</h2>
            <button className="up-down" onClick={() => { setShowCard3(!showCard3) }}>{showCard3 ? "-" : "+"}</button>
          </div>
          {
            showCard3 && <p className="content" style={mode === "light" ? lightBack : DarkBack}>
              This word counter app works in any web browser such as Chrome, Firefox, Internet Explorer, Safari,Opera etc.
            </p>
          }

        </div>
      </div>
    </div>
  );
}
