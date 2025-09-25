import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'


// props is nothing but this is called properties.
// when we fetch props so we can use all variable values/properties of another file where this file imported 
// we can define default props.
export default function Navbar({title= 'set title here',aboutText= 'about text here'}){
 return(
  <div id='container'>
   <a>{title}</a>
   <h5>{aboutText}</h5>
   Hello I am a navbar
  </div>
 )
}

// PropTypes are used to validate the types of props that a component receives. It helps catch bugs by ensuring that your component gets the right kind of data. 
// Navbar.propTypes = {
//  title: PropTypes.string, 
//  aboutText: PropTypes.string
// }

// if we defines as isRequired, so here compelsary passed this variable otherwise this can be used default prop properties.
// this gives error if we does not passed prop for isRequired function.
Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string}


