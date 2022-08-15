import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("CONVERTED TO UPPERCASE!", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase");
    const newText = "";
    setText(newText);
    props.showAlert("Cleared!", "success");
  };

  const handleCopy = () => {
    let textBox = document.getElementById("myBox");
    textBox.select();
    // text.setSelectionRange(0, text.length);
    navigator.clipboard.writeText(textBox.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    console.log(newText);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleProperClick = () => {
    let newWords = [];
    text.split(" ").forEach((word) => {
      if (word === "") {
      } else {
        word = word.substring(0, 1).toUpperCase() + word.slice(1, word.length);
        newWords.push(word);
      }
    });
    console.log(newWords);
    const newText = newWords.join(" ");
    setText(newText);
    props.showAlert("Converted To Propercase!", "success");
  };

  const handleChange = (event) => {
    // console.log("Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleProperClick}>
          Convert to Propercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-4 "
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/[ ]/).filter((word) => word !== " " && word.length > 0)
              .length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>{text.replace(/ /g, "").length} characters without spaces.</p>
        <p>
          {text === "" ? "0" : 0.008 * text.split(" ").length} Minutes read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
