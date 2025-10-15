import React, { useContext } from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'

const Cart = () => {

 let {state,dispatch} = useContext(Context)

  return (
    <div>
     <Link to="/">
      <button>Back</button>
     </Link>
      {
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
      }
    </div>
  )
}

export default Cart
