import { useState } from "react"

// way -1
// const Counter = () =>{
//   let [state,SetState] = useState(0)
//   function fun1(){
//     SetState(state+1)
//   }
//   function fun2(){
//     SetState(state-1)
//   }
//   function fun3(){
//     SetState(0)
//   }
//   return (
//     <div>
//       <h2>{state}</h2>
//       <button onClick={fun1}>increase</button>
//       <button onClick={fun2}>decrease</button>
//       <button onClick={fun3}>reset</button>
//     </div>
//   )
// } 


// way - 2

// const Counter = () =>{
//   let [state,SetState] = useState(0)
//   return (
//     <div>
//       <h2>{state}</h2>
//       <button onClick={()=>SetState(state+1)}>increase</button>
//       <button onClick={()=>SetState(state-1)}>decrease</button>
//       <button onClick={()=>SetState(0)}>reset</button>
//     </div>
//   )
// } 


export default Counter