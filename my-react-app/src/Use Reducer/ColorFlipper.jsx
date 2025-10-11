import React, { act, useReducer } from 'react'

const ColorFlipper = () => {

 function reducer(color,action){
  if(action.type=='red'){
   return 'red'
  }else if(action.type=='blue'){
   return 'blue'
  }else if(action.type=='green'){
   return 'green'
  }else if(action.type=='yellow'){
   return 'yellow'
  }else if(action.type=='purple'){
   return 'purple'
  }else if(action.type=='orange'){
   return 'orange'
  }else if(action.type=='gray'){
   return 'gray'
  }
 }

 let [color,dispatch] = useReducer(reducer,"white")
  return (
    <div style={{backgroundColor: color, width:'100vw', height: '100vh'}}>
      <button onClick={()=>dispatch({type:'red'})}>Red</button>
      <button onClick={()=>dispatch({type:'blue'})}>Blue</button>
      <button onClick={()=>dispatch({type:'green'})}>Green</button>
      <button onClick={()=>dispatch({type:'yellow'})}>Yellow</button>
      <button onClick={()=>dispatch({type:'purple'})}>Purple</button>
      <button onClick={()=>dispatch({type:'orange'})}>Orange</button>
      <button onClick={()=>dispatch({type:'gray'})}>Gray</button>
    </div>
  )
}

export default ColorFlipper
