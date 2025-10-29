import React, { useEffect, useState } from 'react'

const WatchStartStop = () => {

 let [time,Settime] = useState(0)
 let [isRunning, SetRunning] = useState(false)
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
  const minutes = Math.floor(time/60)
  const second = time%60
  return `${String(minutes).padStart(2,"0")}:${String(second).padStart(2,"0")}`
 }

  return (
    <div style={{textAlign:"center", marginTop:"20%"}}>
      <h1>Stop Watch</h1>
      <h2>{formatTime(time)}</h2> 
      <div>
       <button onClick={() => SetRunning(true)} >Start</button>
       <button onClick={() => SetRunning(false)}>Stop</button>
       <button onClick={() => { SetRunning(false); Settime(0); }}>Reset</button>
      </div>
    </div>
  )
}

export default WatchStartStop
