import React, { useState } from "react";
import "./TextForm.css";
const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase.", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
      props.showAlert("Converted to lowercase.", "success");
  };
  const handleClClick = () => {
    setText("");
   props.showAlert("Text has been Cleared! ", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard ", "info");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleDoubleWords = () =>{
    setText(text.replace(/\b(\w+)\s+\1\b/gi, '$1'));
    props.showAlert("Extra Words removed!", "success");
  };

  const handleUniqueWords = () => {
    let words = text.split(/\s+/).filter((word) => word.length > 0);
    let uniqueWords = [...new Set(words)];
    setText(uniqueWords.join(" "));
    props.showAlert("Unique words extracted!", "success");
  };
  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1  my-1"
        onClick={handleDoubleWords}
      >
       Remove Double Words
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1  my-1"
        onClick={handleUniqueWords}
      >
      Unique Words 
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-danger mx-1 my-1"
        onClick={handleClClick}
      >
        Clear text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-success mx-1  my-1"
        onClick={handleCopyClick}
      >
        Copy text
      </button>
    
      <div className="container my-4 sum ">
        <h3>Your Text Summary</h3>
        <br></br>

        <p className="count">
          Word Count:
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          | Character Count:{text.length} | Sentence Count:
          {text.split(".").length}{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>

        <br />
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Write Something to preview."}
        </p>
      </div>
    </div>
  );
};

export default TextForm;
