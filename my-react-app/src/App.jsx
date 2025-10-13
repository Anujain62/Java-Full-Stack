
// for props folder
import React, { useState } from 'react'
import Home, { Recipe_Api } from './Props folder/Recipe_Api.jsx'
import Cart from './Props folder/Cart.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  let [apiData,SetData] = useState([])
  let [meal,SetMeal] = useState([])
  let [cart, SetCart] = useState([])
  console.log(cart)

  return (
      <Routes>
        <Route path='/' element={<Recipe_Api apiData={apiData} SetData={SetData} meal={meal} SetMeal={SetMeal} cart={cart} SetCart={SetCart} />}/>
        <Route path='/Cart' element={<Cart cart={cart} SetCart={SetCart} />}/>
      </Routes>
  )
}   








// for home file of props folder
// import React from 'react'
// import Home from './Props folder/Home.jsx'
// const App = ({a}) => {
//   let user = "hello"
//   return (
//     <div>
//       <Home data={user} a={a}/>
//     </div>
//   )
// }






// for folder use-reducer
// import React from 'react'
// import Counter from './Use Reducer/Counter.jsx';
// import ColorFlipper from './Use Reducer/ColorFlipper.jsx';
// const App = () => {
//   return (
//     <div>
//       {/* <Counter/> */}
//       <ColorFlipper/>
//     </div>
//   )
// }





// for detch product file of product listing folder
// import React from 'react'
// import Fetch_Product from './prodect listing/Fetch_Product'
// const App = () => {
//   return (
//     <div>
//       <Fetch_Product/>
//     </div>
//   )
// }






// for router folder
// import React from 'react'
// import SignUp from './router folder/SignUp'
// import Login from './router folder/Login'
// import { Route, Routes } from 'react-router-dom'
// import {Recipe_Api} from './Recipe_Api'
// // local host + port number + / + page_name
// // http://localhost:5173/
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route   path='/'    element={<Recipe_Api/>}/>
//         <Route   path='/signup'    element={<SignUp/>}/>
//         <Route   path='/login'    element={<Login/>}/>
//       </Routes>
//     </div>
//   )
// }






// // import file inside of class-based-component folder
// import {Navbar_file} from './class based components/Navbar_file'    
// import News from './class based components/news'
// function App(){
//   return(
//     <div>
//       <Navbar_file/>
//       <News pageSize={5} country="in" category="technology"/>
//     </div>
//   )
// }




// import Counter file 
// import Counter from "./Counter"
// function App(){
 //   return (
  //     <div>
  //       <Counter/>
  //     </div>
  //   )
  // }



// // import use effect file
// import { Effect } from "./Effect"
// function App(){
//  return(
//   <div>
//    <Effect/>
//   </div>
//  )
// }
  



// // import arr-map file
// import Arr_Map from "./Arr_Map"
// function App(){
//  return(
//   <div>
//    <Arr_Map/>
//   </div>
//  )
// }

  

// import navbar file
// import Navbar from "./User-Components/Navbar"
// const App = () =>{
//   return(
//     // after importing the file we can change the value of any tag inside the imported file, after fetching the props inside the imported file.
//     // we can pass anything like string, link etc.
//     // <Navbar title="TextUtils" aboutText="About Text"/>
  
//     // if we define props as isRequired so here compalsary passed this variable
//     <Navbar title="TextUtils"/>
  
//     // here does not pass any props so this used default prop values.
//     // <Navbar/>
//    );
//   }
  
  
  
  
// import textform file
// import Navbar from "./User-Components/Navbar"
// import TextForm from "./User-Components/TextForm"
// function App(){
//  return(
//   <div className="container">
//    <Navbar title="TextUtils"/>
//    <TextForm heading="Enter the text to analyze below"/>
//   </div>
//  )
// }





// import recipe_api.jsx file
// import { Recipe_Api } from "./Recipe_Api"
// const App = () =>{
//  return(
//   <Recipe_Api/>
//  )
// }





// // import movie_api.jsx file
// import {Movie_Api} from "./Movie_Api"
// const App = ()=>{
//   return(
//     <Movie_Api/>
//   )
// }






// // how to handle input field
// import React, { useState } from 'react'
// const App = () => {
//   let [input,setInput] = useState("")
//   let [value,SetValue] = useState([])

//   function inputFun(e){
//     setInput(e.target.value)
//   }

//   function AddDataFun(){
//     document.querySelector("input").value = ""
//     // spread operator -> it is combines previous and current values.
//     SetValue([...value,input])
//   }
//   function deleteFun(idx){
//     let tempArr = value.filter((a)=>{
//       return value[idx]!=a
//     })
//     SetValue([tempArr])
//   }
//   return (
//     <div>
//       <input onChange={inputFun}/>
//       <button onClick={AddDataFun}>click</button>
//       {
//         value.map((a,idx)=>{
//           return(<>
//           <h2>{a}</h2>
//           <button onClick={()=>deleteFun(idx)}>Delete</button>
//          </>)
//         })
//       }
//     </div>
//   )
// }






// // import HandleMultipleInputField.jsx file
// import {HandleMultipleInputField} from "./HandleMultipleInputField"
// const App = () =>{
//   return(
//     <div>
//       <HandleMultipleInputField/>
//     </div>
//   )
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







