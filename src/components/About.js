import React, { useState } from "react";
import "../styles/About.css"

export default function About() {
  const [show, setShow] = useState(false)
  return (
    <div className="wrapper">
      <div className="accordion">
        <h1 className="about">About App</h1>
        <div className="item">
          <div className="boxes">
            <h2>Analyse your text</h2>
            <button className="up-down" onClick={() => { setShow(!show) }}>{show ? "-" : "+"}</button>
          </div>
          {
            show && <p className="content">
              Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.
            </p>
          }

        </div>
        <div className="item">
          <div className="boxes">
            <h2>Free to use</h2>
            <button className="up-down" onClick={() => { setShow(!show) }}>{show ? "-" : "+"}</button>
          </div>
          {
            show && <p className="content">
              TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.
            </p>
          }

        </div>
        <div className="item">
          <div className="boxes">
            <h2>Browser compatible</h2>
            <button className="up-down" onClick={() => { setShow(!show) }}>{show ? "-" : "+"}</button>
          </div>
          {
            show && <p className="content">
              This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
            </p>
          }

        </div>
      </div>
    </div>
  );
}
