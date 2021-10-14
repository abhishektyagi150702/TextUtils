import React,{useState} from "react";

export default function TextForm(props) {
   const [text,setText] = useState('Enter text here');
   const handleUpClick =() => {
      
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text converted to uppercase","success");
   }
   const handleLoClick =() => {
      
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text convertd to lowercase","success");
 }
   
   const handleOnChange =(event) => {
    
    setText(event.target.value);
 }
 const handleClearText = () => {
          setText("");
          props.showAlert("Text is cleared","success");
 }
 const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
 }
 const handleExtraSpace = () =>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra space is removed","success");
 }

  return (
    <>
    <div className="container">
      <h1 style={{color: props.mode === 'light'?'black': 'white'}}>{props.heading} </h1>
      <div className="mb-3">
        <textarea  className="form-control my-3" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'light'?'white': 'grey', color: props.mode=== 'light'?'black':'white', caretColor: 'auto'}} id="myBox" rows="8"></textarea>
        <button type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleClearText}>Clear</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Space</button>
        </div>
    </div>
    <div className="container my-4"  style={{color: props.mode === 'light'?'black': 'white'}}>
      <h3>This is text summary</h3>
      <p>  {text.split(" ").length} word and {text.length} characters</p>
      <p>{0.0008*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the text box to preview"}</p>
    </div>
    </>
  );
}