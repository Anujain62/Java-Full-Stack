import React, { use, useContext, useState } from 'react'
import Context from './Context'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Card from './Card'
import CreateAccount from './CreateAccount'
import Login from './Login'
import Signup from './Signup'

const App = () => {
  let userData = {
    name: 'a',
    email: '',
    number: 0,
    password: '1'
  }
  let [user,setUser] = useState(userData)
  return (
    <div>
      {/* {
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
      } */}

      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/card' element={<Card/>} />
        <Route path='/createAccount' element={<CreateAccount/>} />
        <Route path='/' element={<Login info={user} updateInfo={setUser}/>} />
        <Route path='/signup' element={<Signup info={user} updateInfo={setUser} />} />
      </Routes>

    </div>
  )
}

export default App
