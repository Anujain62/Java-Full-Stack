
// empty dependency -> code of inside the useEffect is exicute only once when page was reload,if we do any changes inside the page/state so it reload/exicute whole page but inside of useEffect code does not exicute.
// it is depend on the variable/empty array.


import React, { useEffect, useState } from 'react'
import './App.css'

// export const UseEffect = () => {
//  const [count,SetCount] = useState(0)
//  const [city,SetCity] = useState("Delhi")
//  // it run only once
//  useEffect(()=>{
//   // it prints message 2 time by default
//   // console.log("hii")
//  },[])

//  // // here it depends on count variable
//  // useEffect(()=>{
//  //  console.log("hii")
//  // },[count])

//   return (
//    <div>
//      <h1>{count}</h1> 
//      <h3>{city}</h3>
//      <button onClick={()=>SetCount(count+1)}>click</button>
//      <button onClick={()=>SetCity("Jabalpur")}>Change</button>
//    </div>
//   )
// }






export const Effect = () => {
  let [ApiData, SetApiDate] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data)
        SetApiDate(data)
      })
  }, [])

  return (

    <div>
      {
        ApiData.map((a) => {
          return (
            <div id='container'>
              <p id='para'>{a.id}</p>
              <h3 id='text'>{a.title}</h3>
            </div> 
          )
        })
      }
    </div>

  )
}
