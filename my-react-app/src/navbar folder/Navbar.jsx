import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div id='container'>
     <Link to={'/'}>
      <button>Home</button>
     </Link>
     <Link to={'/about'}>
      <button>About</button>
     </Link>
     <Link to={'/signin'}>
      <button>Signin</button>
     </Link>
     <Link to={'/signup'}>
      <button>SignUp</button>
     </Link>
    </div>
  )
}

export default Navbar
