import React, { createContext, useEffect, useReducer, useState } from "react";

// 1️⃣ Create the context
const Context = createContext();

// 2️⃣ Create the provider component
export const ContextProvider = ({ children }) => {

 let data = {
  apiData: [],
  cart: []
 }

 function reducer(state,action){
  if(action.type=="Fetch_data"){
   // console.log(action.payload)
   return{
    apiData: action.payload
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
};

// 3️⃣ Export both
export default Context;
