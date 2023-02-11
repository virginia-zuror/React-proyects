import './Chrono.css'

import React, { useEffect, useState } from 'react'

const Chrono = () => {
    const [time, setTime]=useState(0);
    const [chronoOn, setChronoOn]=useState(false);


    useEffect(()=>{
        let interval=null;
        if(chronoOn){        
            interval=setInterval(()=>{
                setTime((prevTime)=>prevTime+10)
            },10)
        }else{
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [chronoOn])



  return (

    
    <div className='chrono'>
        <div className='btns-chrono'>
            {!chronoOn && time === 0 && (
                <button onClick={(()=>setChronoOn(true))}>Start</button>)}
            {chronoOn && time>0 && (<button onClick={(()=> setChronoOn(false))}>Stop</button>)}
            {!chronoOn && time> 0 && (
                <button onClick={(()=>setChronoOn(true))}>Resume</button>)}
            {!chronoOn && time >0 &&(
            <button onClick={(()=>setTime(0))}>Reset</button>)}
        </div>
        <div className='time'>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    </div>
    


  )
}
    
export default Chrono