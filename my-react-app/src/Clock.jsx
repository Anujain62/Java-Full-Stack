import { useState } from "react"

const Clock = () =>{
 let [time,SetState] = useState()

 let stop = setInterval(()=>{
  SetState(new Date().toLocaleTimeString())
 },1000)
 
 function fun(){
  console.log("hii");
  clearInterval(stop)
  // SetState(new Date().toLocaleTimeString())
 }

 return(
  <div>
   <h1>{time}</h1>
   <button onClick={fun}>click</button>
  </div>
 )

}

export default Clock