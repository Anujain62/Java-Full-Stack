
import React, { useReducer } from 'react'

const Counter = () => {
 // action gets what we passed inside dispatch when we want any action.
 function reduser(count,action){
  if(action.type=="inc"){
   return count+1
  }
  else if(action.type=="dec"){
   return count-1
  }
  else if(action.type=="reset"){
   return 0
  }
 }

 // useReducer first parameter contains function name and second parameter contains intial value. 
 let [count, dispatch] = useReducer(reduser,0)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch({type: "inc"})}>++</button>
      <button onClick={()=>dispatch({type: "dec"})}>--</button>
      <button onClick={()=>dispatch({type: "reset"})}>reset</button>
    </div>
  )
}

export default Counter
