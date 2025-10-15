
import React, { useContext, useState } from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import '../../App.css'

const Recipe_data = () => {

 let {state,dispatch} = useContext(Context)

 function AddItem(item){
  dispatch({
    type: 'ADD_TO_CART',
    payload: item
  })
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
      <Link to="/Cart">
       <button>Add to Cart</button>
      </Link>
     </div>

    </div>

    <div id='input-field'>
      <input id='inp' placeholder='Enter your choice'></input>
      <button onClick={()=>searchInp(document.getElementById("inp").value)}>Search</button>
    </div>
   
    {
     // second element is points to index number.
     state.apiData.map((a,index)=>{
      return(<>
       <div id='card'>
        <img src={a.image}/>
        <h5>Name : {a.name}</h5>
        <p><b>MealType: </b> {a.mealType}</p>
        <p><b>Rating:</b> {a.rating}</p>
        <button onClick={()=>daleteItem(index)}>Delete</button>
        <button onClick={()=>AddItem(a)}>Add</button>
       </div>
      </>)
     })
    }
   </div>
  )
}

export default Recipe_data
