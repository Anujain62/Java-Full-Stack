
import React, { useState } from 'react'

export const HandleMultipleInputField = () => {
 let [data,SetData]=    useState([])
 let [input,SetInput]=   useState({
  name:"",
  email:"",
  passWord:""
 })  
 function fun1(e){
  let  {name,value}= e.target
  SetInput({...input,[name]:value})
  console.log(input)
 }  
 function done(){
  SetData([...data,input])
  console.log(data)
 }   
  return (
   <div>
    <input   name='name' value ={input.name} onChange={fun1} type='text' placeholder='Name'/>
    <br></br>
    <br></br>
    <input  name='passWord' value={input.passWord}  onChange={fun1} type='text' placeholder='passWord'/>
    <br></br>
    <br></br>
    <input name='email' value={input.email} onChange={fun1}  type='email' placeholder='Email'/>
    <button onClick={done}>click</button>
    {
     data.map((a)=>{
      return(<>
       <h2>{a.name}</h2>
       <h2>{a.email}</h2>
       <h2>{a.passWord}</h2>
      </>)
     })
    }
    </div>
  )
}







