import React, { useEffect, useState } from 'react'
import './App.css'

const StopWatchCirculer = () => {

 let [time,Settime] = useState(0)
  let [isRunning, SetRunning] = useState(true)
  useEffect(()=>{
   let timer;
   if(isRunning){
    timer = setInterval(()=>{
     Settime((prevTime)=> prevTime+1)
    },100)
   }else{
    clearInterval(timer)
   }
   return () => clearInterval(timer)
  },[isRunning])

 const formatTime = (time) =>{
  const miliSecond = time%100
  let second = Math.floor(time/100)
  const minutes = Math.floor(second/60)
  second = second%60
  return `${String(minutes).padStart(2,"0")}:${String(second).padStart(2,"0")}.${String(miliSecond).padStart(2,"0")}`
  }

  return (
    <div id='container'>
      <h1>{formatTime(time)}</h1>
      <div id='circle'><h2></h2></div>
      <div id='btn'>
       <button onClick={()=>SetRunning(true)}>Start</button>
       <button onClick={()=>SetRunning(false)}>Stop</button>
       <button onClick={()=>{SetRunning(false); Settime(0)}}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatchCirculer
