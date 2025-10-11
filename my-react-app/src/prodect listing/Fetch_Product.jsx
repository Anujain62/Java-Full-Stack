

import React, { useEffect, useState } from 'react'
import '../App.css'

const Fetch_Product = () => {
 let [data,SetData] = useState([])
 let [apiData,SetApiData] = useState([])

 useEffect(()=>{
  fetch(" https://dummyjson.com/products/search?q=phone").then((res)=>{
   return res.json()
  }).then((data)=>{
   console.log(data)
   SetApiData(data.products)
   SetData(data.products)
  })
 },[])

  function searchFun(inp){
    if(inp==""){
      alert("Search Something")
    }
    else{
      let tempData = apiData.filter((item)=>{
        return item.brand.toLowerCase().includes(inp.toLowerCase());
      })
      document.getElementById("inp").value = "" 
      if(tempData.length==0){
       alert("Not found")
       SetData(apiData)
       return
      }
      SetData(tempData)
    }
  }

  function priceSort(type){
    let sorted = [...apiData].sort((a, b) => {
     if (type === "ascending") {
       return a.price - b.price;  // Low to high
     }else {
       return b.price - a.price;  // High to low
     }
    });
   SetData(sorted);
  }

  function ratingSort(type){
     let sorted = [...apiData].sort((a, b) => {
     if (type === "ascending") {
       return a.rating - b.rating;  // Low to high
     }else {
       return b.rating - a.rating;  // High to low
     }
    });
   SetData(sorted);
  }

  function filterByBrand(brand){
    if(brand==""){
      SetData(apiData)
    }else{
      let temp = apiData.filter((item)=>{
        return brand==item.brand
      })
      SetData(temp)
    }
  }

  function filterByRating(rate){
    if(rate==""){
      SetData(apiData)
    }else{
      let temp = apiData.filter((item)=>{
        return item.rating >= rate
      })
      SetData(temp)
    }
  }

  return (
    <div id='container'>

      <div id='inputField'>
       <input id='inp' placeholder='Search'/>
       <button onClick={()=>searchFun(document.getElementById("inp").value)}>Search</button>
      </div>

      <div id='buttons'>
        <div id='price' className='btn'>
          <h2>Sort Price Based</h2>
          <div id='btn'>
            <button onClick={()=>{priceSort("ascending")}}>ascending</button>
            <button onClick={()=>{priceSort("descending")}}>descending</button>
          </div>
        </div>
        <div id='rating' className='btn'>
          <h2>Sort Rating Based</h2>
          <div id='btn'>
            <button onClick={()=>{ratingSort("ascending")}}>ascending</button>
            <button onClick={()=>{ratingSort("descending")}}>descending</button>
          </div>
        </div>
        <div id='brand'>
          <label><b>Brand</b></label>
          <select onChange={(e) => filterByBrand(e.target.value)}>
           <option value="">All Brands</option>
           <option value="Apple">Apple</option>
           <option value="Samsung">GadgetMaster</option>
           <option value="Infinix">Beats</option>
           <option value="SnapTech"> SnapTech</option>
           <option value="Oppo">Oppo</option>
           <option value="Realme">Realme</option>
           <option value="Samsung">Samsung</option>
           <option value="Vivo">Vivo</option>
          </select>
        </div>
        <div id='rating-based'>
          <label><b>Rating</b></label>
          <select onChange={(e) => filterByRating(e.target.value)}>
            <option value="">All</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>

      <div id='data'>
       {
        data.map((a)=>{
         return(<>
          <div id='detail'>
            <img src={a.images[0]} alt='title'/>
            <h3>Brand : {a.brand}</h3>
            <h4>Price : {a.price}</h4>
            <h5>Title : {a.title}</h5>
            <p>Rating : {a.rating}</p>
          </div>
         </>)
        })
       }
      </div>

    </div>
  )
}

export default Fetch_Product
