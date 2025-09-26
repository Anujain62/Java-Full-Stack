
import React, { useEffect, useState } from 'react'
import './App.css'
export const Recipe_Api = () => {
 let [apiData,SetData] = useState([])
 let [meal,SetMeal] = useState([])
 let [count,setCount] = useState(0)
 let [item,SetItem] = useState("")

 useEffect(()=>{
  fetch("https://dummyjson.com/recipes").then((res)=>{
   return res.json()
  }).then((data)=>{
   console.log(data)
   SetMeal(data.recipes)
   SetData(data.recipes)
  })
 },[])

 function daleteItem(index){
  // filter function returns an array,and second element is points to index number.
  let newArr = apiData.filter((a,idxNo)=>{
   return idxNo!=index
  })
  SetMeal(newArr)
 }

 function SaveItem(item){
  JSON.stringify(localStorage.setItem("ItemName",item.name))
  setCount(count+1)
 }

 function showAscending(){
  let sorted = [...meal].sort((a,b)=> a.rating-b.rating)
  SetMeal(sorted)
 }

 function showDecending(){
  let sorted = [...meal].sort((a,b)=>a.rating-b.rating)
  sorted.reverse()
  SetMeal(sorted)
 }

 function showMeal(meal){
  if(meal=="Dinner"){
   let dinner = apiData.filter((a)=>{
    return meal==a.mealType
   })
   SetMeal(dinner)
  }else if(meal=="Lunch"){
   let lunch = apiData.filter((a)=>{
    return meal==a.mealType
   })
   SetMeal(lunch)
  }else if(meal=="Beverage"){
   let beverage = apiData.filter((a)=>{
    return meal==a.mealType
   })
   SetMeal(beverage)
  }else if(meal=="Breakfast"){
   let breakFast = apiData.filter((a)=>{
    return meal==a.mealType
   })
   SetMeal(breakFast)
  }else{
   SetMeal(apiData)
  }
 }

 function searchInp(item){
  document.getElementById("inp").value = ""
  if(item=="Dinner"){
    SetItem("")
    showMeal(item)
  }else if(item=="Lunch"){
    SetItem("")
    showMeal(item)
  }else if(item=="Beverage"){
    SetItem("")
    showMeal(item)
  }else if(item=="Breakfast"){
    SetItem("")
    showMeal(item)
  }
  else{
    SetItem("Not Fount")
    showMeal("All")
  }
 }

  return (
   <div>
    <div id='container'>
      
     <div id='left' className='btns'>
      <p>Rating Based Sort</p>
      <div className='btn'>
       <button onClick={()=>showDecending()}>Decending</button>
       <button onClick={()=>showAscending()}>Ascending</button>
      </div>
     </div>

     <div id='right' className='btns'>
      <p>MealType Based Sort</p>
      <div className='btn'>
       <button onClick={()=>showMeal("all")}>All</button>
       <button onClick={()=>showMeal("Dinner")}>Dinner</button>
       <button onClick={()=>showMeal("Lunch")}>Lunch</button>
       <button onClick={()=>showMeal("Beverage")}>Beverage</button>
       <button onClick={()=>showMeal("Breakfast")}>Breakfast</button>
      </div>
     </div>

     <div id='cardItem'>
      <span><b>Card</b></span>
      <span>{count}</span>
     </div>

    </div>

    <div id='input-field'>
      <input id='inp' placeholder='Enter your choice'></input>
      <button onClick={()=>searchInp(document.getElementById("inp").value)}>Search</button>
    </div>
      <h1 id='item'>{item}</h1>
   
    {
     // second element is points to index number.
     meal.map((a,index)=>{
      return(<>
       <div id='card'>
        <img src={a.image}/>
        <h5>Name : {a.name}</h5>
        <p><b>MealType: </b> {a.mealType}</p>
        <p><b>Rating:</b> {a.rating}</p>
        <button onClick={()=>daleteItem(index)}>Delete</button>
        <button onClick={()=>{SaveItem(a)}}>Save</button>
       </div>
      </>)
     })
    }
   </div>
  )
}
