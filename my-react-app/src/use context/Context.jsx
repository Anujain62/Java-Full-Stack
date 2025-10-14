// for home.jsx file
// import { createContext } from "react";
// let Context = createContext()
// export default Context



import { createContext, useEffect, useReducer } from "react";
let Context =  createContext()
export default Context

// functional components 
const ContectProvider = ({children}) =>{

 let data = {
  apiData: [],
  cart: []
 }

 function reducer(apiData,action){
  if(action.type=="Fetch_data"){
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
 })

 let [val, dispatch] = useReducer(reducer,data)
 return(
  <div>
   <Context.Provider>
    {children}
   </Context.Provider>
  </div>
 )
}

export {ContectProvider}
