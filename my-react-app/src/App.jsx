// import React from "react"
// import { useState } from "react"



// import Counter file 
// import Counter from "./Counter"
// function App(){
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }
  
  

// // import navbar file
// import Navbar from "./User-Components/Navbar"
// const App = () =>{
//  return(
//   // after importing the file we can change the value of any tag inside the imported file, after fetching the props inside the imported file.
//   // we can pass anything like string, link etc.
//   // <Navbar title="TextUtils" aboutText="About Text"/>

//   // if we define props as isRequired so here compalsary passed this variable
//   <Navbar title="TextUtils"/>

//   // here does not pass any props so this used default prop values.
//   // <Navbar/>
//  );
// }




// re-writing of app jsx file
// let name = "Anu"
// const App = () =>{
//   return(
//     <>
//      <nav>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//      </nav>
//      <div className="container">
//       <h1>Hello {name}</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//      </div>
//     </>
//   )
// }




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







