
import React from 'react'
import { Link } from 'react-router-dom'
import About  from './About'

const Home = () => {
  return (
    <div>
      <div>
       <Link to={"/about"} >About</Link>
       <Link to={"/card"} >Card</Link>
       <Link to={"/login"} >Login</Link>
       <Link to={"/signup"} >Signup</Link>
      </div>
    </div>
  )
}

export default Home
