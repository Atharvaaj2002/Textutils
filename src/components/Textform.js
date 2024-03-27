import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleUnClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setText(history[currentIndex - 1]);
    }
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setHistory([...history.slice(0, currentIndex + 1), newText]);
    setCurrentIndex(currentIndex + 1);
    props.showAlert("CONVERTED TO UPPERCASE", "SUCCESS");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setHistory([...history.slice(0, currentIndex + 1), newText]);
    setCurrentIndex(currentIndex + 1);
    props.showAlert("CONVERTED TO LowerCASE", "SUCCESS");
  };
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.setAttribute("aria-selected", true); // Fix: Correct method name
    text.setSelectionRange(0, 9999); // Fix: Correct method name
    navigator.clipboard.writeText(text.value);
  };


  function HandleOnChange(event) {
    const newText = event.target.value;
    setText(newText);
    setHistory([...history.slice(0, currentIndex + 1), newText]);
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'#0e0e33'}} >
        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"value={text} onChange={HandleOnChange}id="mybox"rows="8"
           style={{backgroundColor:props.mode==='dark'?'#020937':'white', color:props.mode==='dark'?'white':'#0e0e33'}}></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button  disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>copy text</button>
        
        
        <button  className="btn btn-primary mx-2 my-1"onClick={handleUnClick} disabled={currentIndex === 0}>Undo</button>
          
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0e0e33'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.length Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"ENTER SOMETHING TO PREVIEW"}</p>
      </div>
    </>
  );
}
