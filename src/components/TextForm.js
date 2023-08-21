import React, { useState } from "react";

export default function TextForm(props) {
   
  const handleUpClick = ()=> {

   //  console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase ","success ");
  } 

 const handleLowClick = ()=> {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase ","success ");
 }

 const handleClearClick = ()=> {
  let newText = " "
  setText(newText);
  props.showAlert("Clear Text ","success ");
 }
  // console.log("On Change");
  const handleOnChange = (event)=> {
    setText(event.target.value);
  } 

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied ","success ");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Specess given successfully","success ");
  }
   
  const [text, setText] = useState('');
  return (
    <>
    <div className="conatiner" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3" >
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Priview</h2>
    </div>
    </>
  );
}
