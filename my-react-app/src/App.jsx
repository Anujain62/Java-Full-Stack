import React from "react"
import { useState } from "react"
import Counter from "./counter"
import Clock from "./Clock"


// import new Counter file 
// function App(){
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }


// import Clock file
function App(){
  return(
    <div>
      <Clock/>
    </div>
  )
}



// for printing counting
// const App = () =>{
//   let [state,SetState] = useState(0)
//   function fun1(){
//     SetState(state+1)
//   }
//   return (
//     <div>
//       <h2>{state}</h2>
//       <button onClick={fun1}>click</button>
//     </div>
//   )
// } 



// for background color changing only once
// const App = () =>{
//   let [state,SetState] = useState("red")
//   function fun1(){
//     SetState("green")
//   }
//   return (
//     <div style={{backgroundColor: state}}>
//       <h2>{state}</h2>
//       <button onClick={fun1}>click</button>
//     </div>
//   )
// } 



//color changing continuous
// const App = () =>{
//   let [state,SetState] = useState("red")
//   function fun1(){
//     if(state=="red"){
//       SetState("green")
//     }
//     else{
//       SetState("red")
//     }
//   }
//   return (
//     <div style={{backgroundColor: state}}>
//       <h2>{state}</h2>
//       <button onClick={fun1}>click</button>
//     </div>
//   )
// } 








export default App 







