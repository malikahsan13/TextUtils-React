import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChangeEvent = (event) => {
    //console.log("change event");
    setText(event.target.value);
  };

  const handleUpperEvent = () => {
    //console.log("click event" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase Set","success");
  };

  const handleLowerEvent = () => {
    //console.log("click event" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase Set","success");
  };

  const handleBoldEvent = () => {
    //console.log("click event" + text);
    let newBoldText = text.bold();
    setText(newBoldText);
    props.showAlert("Bold Set","success");
  };

  return (
    <>
      {/* <div className={props.mode==='dark'?'bg-body-dark':'bg-body-light'}> */}
      <div>
        <div className="mb-3">
          <h1 style={{color : props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleChangeEvent}
            placeholder="Enter Some Text Here"
            style={{backgroundColor : props.mode==='dark'?"grey":"white",color : props.mode==='dark'?"white":"black"}}
          ></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handleUpperEvent}>
            Change to UpperCase
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleLowerEvent}>
            Change to LowerCase
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleBoldEvent}>
            Change to Bold
          </button>
        </div>
      </div>
      <div className="container" style={{color : props.mode==='dark'?"white":"black"}}>
        <h6><b>Your Text Summary</b></h6>
        <p>Words Count {text.split(' ').length-1} | Character Count {text.length}</p>
        <p>{0.008 * text.split(' ').length} Minute Read</p>
      </div>
      <div className="container" style={{color: props.mode==='dark'?"white":"black"}}>
        <h6><b>Text Preview</b></h6>
        <p>{text}</p>
      </div>
    </>
  );
}
