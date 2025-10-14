import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter}  from 'react-router-dom'
import Context from './use context/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* for props file of props folder
    <BrowserRouter>   
    <App a="hii"/>
    </BrowserRouter> */}

    {/* for recipe file of props folder
    <BrowserRouter>
     <App/>
    </BrowserRouter> */}

    
   {/* for use context folder */}
   {/*data flow ->  context.jsx - main.jsx - use in any file */}
   <Context.Provider value={"Hello"}>
     <App/>
   </Context.Provider>


  </StrictMode>
)
