
import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Context from './Context'

const Card = () => {
  let {state} = useContext(Context)
  return (
    <div>
     <Link to="/home">
      <button>Back</button>
     </Link>
     {state.cart.length===0?(
      <p>No item in cart</p>
     ):(
      state.cart.map((a,idx)=>{
        return(<>
         <div id='card'>
           <img src={a.image}/>
           <h5>Name : {a.name}</h5>
           <p><b>MealType: </b> {a.mealType}</p>
           <p><b>Rating:</b> {a.rating}</p>
           <button onClick={()=>{removeItem(idx)}}>Delete</button>
         </div>
        </>)
      })
     )
      
     }
    </div>
  )
}

export default Card
