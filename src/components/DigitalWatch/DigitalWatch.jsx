import './DigitalWatch.css'

import React, { useEffect, useState } from 'react'


const DigitalWatch = () => {

  const [showTime, setShowTime]= useState();

  useEffect(()=>{
    setInterval (()=>{
      const date = new Date();
      setShowTime(date.toLocaleTimeString());
    }, 1000);
  }, [])

  return (
    <div className='digitalWatch'>
      <h2>{showTime}</h2>
      
      </div>
  )
}

export default DigitalWatch