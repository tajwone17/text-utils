import React, { useState } from "react";
import './TextForm.css';
const TextForm = (props) => {
 const[text,setText]= useState("");
 const handleUpClick=()=>{
    setText(text.toUpperCase());
    text.length>0 && props.showAlert("Converted to uppercase.","success")
 }
 const handleLoClick=()=>{
    setText(text.toLowerCase());
    text.length>0 && props.showAlert("Converted to lowercase.","success")
 }
 const handleClClick=()=>{
    setText("");
    text.length>0 && props.showAlert("Text has been Cleared! ","success")
 }
 const handleOnChange=(event)=>{
    setText(event.target.value);
 }
 const handleCopyClick=()=>{
  navigator.clipboard.writeText(text); text.length>0 && props.showAlert("Copied to clipboard ","info")
 }


  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter The Text Here" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button type="button" className="btn btn-danger mx-1" onClick={handleClClick}>Clear text</button>
      <button type="button" className="btn btn-success mx-1" onClick={handleCopyClick}>Copy text</button>
      <div  className="container my-4 sum ">
        <h3>Your Text Summary</h3>
      <br></br>
        
        <p className="count">Word Count:{text.split(" ").length}  |  Character Count:{text.length}  |  Sentence Count:{text.split(".").length} </p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
       
       <br />
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to the textbox above to preview it here..."}</p>
      </div>
    </div>
  );
};
 

export default TextForm;
