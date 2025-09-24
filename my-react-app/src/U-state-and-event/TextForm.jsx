import React, {useState} from "react"


export default function TextForm(props){
 const [text,setText] = useState("Enter text here ")
 // text = "new text"   //wrong way to change the state.
 // setText("new Text")   //correct way to change the state.

 const handleUpClick = ()=>{
  setText("You have clicked on handleUpClick")
 }
 const handleOnChange = ()=>{

 }
 return(
  <div>
   <h1>{props.heading}</h1>
   <div className="mb-3">
    <textarea className="form-control" value={text} onClick={handleOnChange} id="myBox" rows={"8"}></textarea>
   </div>
   <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
  </div>
 )
}