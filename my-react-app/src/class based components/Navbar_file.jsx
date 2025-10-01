import React, { Component } from 'react'
import '../App.css'

export class Navbar_file extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/'>NewsMonkey</a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'><a className='nav-link' aria-current='page' href='/'>Home</a></li>
                <li className='nav-item'><a className='nav-link' href='/about'>About</a></li>
                <li className='nav-item'><a className='nav-link' href='/business'> business</a></li>
                <li className='nav-item'><a className='nav-link' href='/entertainment'> entertainment</a></li>
                <li className='nav-item'><a className='nav-link' href='/general'>general</a></li>
                <li className='nav-item'><a className='nav-link' href='/health'> health</a></li>
                <li className='nav-item'><a className='nav-link' href='/science'> science</a></li>
                <li className='nav-item'><a className='nav-link' href='/sports'> sports</a></li>
                <li className='nav-item'><a className='nav-link' href='/technology'> technology</a></li>
              </ul>
            </div>
          </div>
         
        </nav>
      </div>
    )
  }
}

