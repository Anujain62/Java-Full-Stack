import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart, SetCart}) => {
 function removeItem(index){
  let newArr = cart.filter((a,idxNo)=>{
   return idxNo!=index
  })
  SetCart(newArr)
 }
  return (
    <div>
     <Link to="/">
      <button>Back</button>
     </Link>
      {
       cart.map((a,idx)=>{
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
      }
    </div>
  )
}

export default Cart
