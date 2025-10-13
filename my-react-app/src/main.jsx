import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter}  from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   
    {/* for props file of props folder */}
    {/* <App a="hii"/> */}
    <App/>
    </BrowserRouter>
  </StrictMode>
)
