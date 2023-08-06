import React, { useState } from 'react'
// useState is a hook --> 'react hook' search it on google

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!", "success");
  }

  const handleOnChange = (event) => {  //for this fxn we are able to add new text after the existing text, or we can type in the text area
    // console.log("On Change");
    setText(event.target.value);
  }

  const handlefindChange = (event) => {

    findWord(event.target.value);  //This will store the textArea's value to fword

  };
  const handlereplaceChange = (event) => {
    console.log(replaceWord(event.target.value));   //This will store the textArea's value to rword
  }
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fword, rword);
    setText(newText);
    props.showAlert("The Word Has Been Replaced!!", "danger");
  }

  const handleOnCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces have been removed...", "success");
  }


  const [fword, findWord] = useState('');
  const [rword, replaceWord] = useState('');
  const [text, setText] = useState('Enter text here');
  //here we have created a text variable whose default value is 'Enter text here', we will change value of text by setText

  // text = {"new text"}; // wrong way to set the text
  // setText("new Text"); // correct way to set the text
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042c6b' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>

          {/* Finding and replacing the word */}
          <textarea className="mx-2 my-3" type="text" value={fword} placeholder="Find the word" onChange={handlefindChange} style={{ backgroundColor: props.mode === 'dark' ? '#042c6b' : 'white' }} rows="1"></textarea>
          <textarea type="text" className="mx-2 my-3" value={rword} placeholder="Replace with" onChange={handlereplaceChange} style={{ backgroundColor: props.mode === 'dark' ? '#042c6b' : 'white' }} rows="1" ></textarea>
          <button className="btn btn-primary mx-2 " onClick={handleReplaceClick}>Find & Replace</button>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary mx-2 " onClick={handleOnCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
        </div>


      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read the words</p>
        {/* As we take 0.008 min to read a word --> on avg (from google) */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>

  )
}
