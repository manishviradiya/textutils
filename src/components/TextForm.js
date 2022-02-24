import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, settext] = useState("");
   
    const handleupclick= ()=>
    {
        //console.log("upper case was click " + text);
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showalert("Convert to Uppercase!","success");
    }
    const handleloclick= ()=>
    {
        //console.log("upper case was click " + text);
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showalert("Convert to Lowercase!","success");
    }
    const handleclclick= ()=>
    {
        let newtext='';
        settext(newtext);
        props.showalert("Text Cleared!","success");
    }
    const handlecaclick= (str)=>
    {
        let newtext=text.split(' ').map((word)=> word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
        settext(newtext);
        props.showalert("Convert to Capitalizedcase!","success");
    }
    const handleinclick= (str)=>
    {
        let newtext=text.split(' ').map((word)=> word[0].toLowerCase() + word.slice(1).toUpperCase()).join(' ')
        settext(newtext);
        props.showalert("Convert to Inversecase!","success");
    }
    const hanldeonchange= (event)=>
    {
        //console.log("OnChange");
        settext(event.target.value)
    }
    const handlecopy= ()=>
    {
        let text=document.getElementById("box")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showalert("Copy to clipboard!","success");
    }
    const removeextraspace= ()=>
    {
        let newtext= text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showalert("Extra Space Remove!","success");
    }
  return (
      <>
       <div className="container">
          <h1 className={`text-${props.mode==='dark'?'white':'#042743'}`}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="box" rows="8" value={text} onChange={hanldeonchange} style={{ backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className={`btn btn-primary mx-1 my-1`} onClick={handleupclick}>Convert To UPPER CASE</button>
        <button className={`btn btn-primary mx-1 my-1`} onClick={handlecaclick}>Convert To Capitalized Case</button>
        <button className={`btn btn-primary mx-1 my-1`} onClick={handleinclick}>CONVERT TO iNVERSE cASE</button>
        <button className={`btn btn-primary mx-1 my-1`} onClick={handleloclick}>Convert To lower case</button>
        <button className={`btn btn-primary mx-1 my-1`} onClick={handleclclick}>Clear Text</button>
        <button className={`btn btn-primary mx-1 my-1`} onClick={handlecopy}>Copy Text</button>
        <button className={`btn btn-primary mx-1 my-1`} onClick={removeextraspace}>Remove Extra Spaces</button>
      </div>
      <div className={`conatiner my-2 text-${props.mode==='light'?'dark':'light'}`} >
          <h2>Your Text Summery</h2>
          <p>{text.split(" ").filter((y) => (y!=="")).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something In The Textbox To Preview It Here"}</p>
      </div>
      </>
  )
}

