// for home.jsx file
// import { createContext } from "react";
// let Context = createContext()
// export default Context



import { createContext, useEffect, useReducer, useState } from "react";
let Context =  createContext()
export default Context

// functional components 
const ContectProvider = ({children}) =>{

 let data = {
  apiData: [],
  cart: []
 }

 function reducer(state,action){
  if(action.type=="Fetch_data"){
   return{
    apiData: action.payload
   }
  }
  else if(action.type=="ADD_TO_CART"){
   return{
    ...state,cart: [action.payload]
   }
  }
 }
 useEffect(()=>{
  fetch("https://dummyjson.com/recipes").then((res)=>{
   return res.json()
  }).then((data)=>{
   dispatch({type:"Fetch_data",payload:data.recipes})
  })
 },[])

 let [state, dispatch] = useReducer(reducer,data)
 return(
  <div>
   <Context.Provider value={{state,dispatch}}>
    {children}
   </Context.Provider>
  </div>
 )
}

export {ContectProvider}
