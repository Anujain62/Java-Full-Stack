import React, { use, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Card from './Card'
import CreateAccount from './CreateAccount'
import Login from './Login'
import Signup from './Signup'

const App = () => {
  let userData = {
    name: '',
    email: '',
    number: 0,
    password: ''
  }
  let [user,setUser] = useState(userData)
  return (
    <div>
      
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
