
import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Context from './Context'
import './App.css'


const Home = () => {

  let {state,dispatch} = useContext(Context)

  function AddItem(item){
    console.log("add")
   dispatch({
     type: 'ADD_TO_CART',
     payload: item
    })
    console.log("updated cart ",state.cart)
  }

//   function daleteItem(index){
//   let newArr = state.apiData.filter((a,idxNo)=>{
//    return idxNo!=index
//   })
//   dispatch({
//     type: 'UPDATE',
//     payload: newArr
//   })
//  }

  return (
    <div id='home'>
      <div id='home-navbar'>
        <div id='left-home'>
         <Link to={"/signup"} className='link'>Signup</Link>
         <Link to={"/home"} className='link'>Home</Link>
         <Link to={"/about"} className='link'>About</Link>
        </div>
        <div id='mid-home'>
         <input placeholder='Search here....'/>
         <button>Search</button>
        </div>
        <div id='right-home'>
         <Link to={"/card"} id='link'>Go to Card </Link>
         <p>{state.cart.length}</p>
        </div>
      </div>

      {
       state.updatedData.map((a,index)=>{
       return(<>
         <div id='home-card'>
           <img src={a.image}/>
           <h5>Name : {a.name}</h5>
           <p><b>MealType: </b> {a.mealType}</p>
           <p><b>Rating:</b> {a.rating}</p>
           <button onClick={()=>AddItem(a)}>Add</button>
         </div>
        </>)
      })
     }

    </div>
  )
}

export default Home
