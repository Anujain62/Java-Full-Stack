import React, { createContext, useEffect, useReducer, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {

 let data = {
  apiData: [],
  cart: [],
  updatedData: []
}

let [state, dispatch] = useReducer(reducer,data)

function reducer(state,action){
  if(action.type=="Fetch_data"){
   return{
    ...state,apiData: action.payload
   }
  }else if(action.type=='ADD_TO_CART'){
   return{
    ...state,cart: [...state.cart,action.payload]
   }
  }else if(action.type=='UPDATE'){
    return{
      ...state,updatedData: action.payload
    }
  }else{
   return state
  }
 }


  useEffect(()=>{
  fetch("https://dummyjson.com/recipes").then((res)=>{
   return res.json()
  }).then((data)=>{
   dispatch({type:"Fetch_data",payload:data.recipes})
   dispatch({type:"UPDATE",payload:data.recipes})
  })
 },[state.cart])

 return(
  <div>
   <Context.Provider value={{state,dispatch}}>
    {children}
   </Context.Provider>
  </div>
 )
};

export default Context;
