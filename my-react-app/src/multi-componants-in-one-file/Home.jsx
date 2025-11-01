// multiple-componants used in one file

import React from 'react'

const Home = () => {
 let user = 'Anu'
  return (
    <div>
      <h1>Hello, I am from Home</h1>
      <New name={user} />
    </div>
  )
}


// if we wants to use this componant in another file, so export this as a object because only one componant was exported at a time in one file.1q`
const New = ({name})=>{
 return(
  <div>
   hiii
   <h1>{name}</h1>
  </div>
 )
}

export {New}
export default Home
