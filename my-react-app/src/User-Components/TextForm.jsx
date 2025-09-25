import React, {useState} from "react"
import '../App.css'

export default function TextForm(props){

 const [text,setText] = useState('')
 
 // text = "new text"   //wrong way to change the state.
 // setText("new Text")   //correct way to change the state.

 const handleUpClick = ()=>{
  setText(text.toUpperCase())
 }
 const handleOnChange = (event)=>{
  setText(event.target.value)
 }
 const handleLoClick = ()=>{
  setText(text.toLowerCase())
 }

 return(
  <div className="main-div">
  <div className="container">
   <h1>{props.heading}</h1>
   <div>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={"8"}></textarea>
   </div>
   <button onClick={handleUpClick}>Convert to Uppercase</button>
   <button onClick={handleLoClick}>Convert to Uppercase</button>
  </div>
  <div className="container">
   <h2>Your text summary</h2>
   <p>{text.split(/\s+/).length} words and {text.length} characters</p>
   <p>{0.008*text.split(/\s+/).length} minutes read</p>
   <h2>Preview</h2>
   <p>{text}</p>
  </div>
  </div>
  
 );
}