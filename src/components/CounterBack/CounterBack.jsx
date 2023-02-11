import React, { useEffect, useState } from 'react'
import './CounterBack.css'


const CounterBack = () => {

    const [time, setTime]=useState('');

    useEffect(()=>{
        let countToZero = new Date("Mar 30, 2023 00:00:00").getTime();
        let x = setInterval(()=>{
            let now = new Date().getTime();
            let difference =  countToZero - now;
            let days = Math.floor(difference/(1000*60*60*24));
            let hours = Math.floor((difference%(1000*60*60*24))/(1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTime(days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's');

            if(difference<0){
                clearInterval(x);
                setTime('YOU NEED TO GO BACK TO THE TARDIS!!!')
            }
        }, 1000)
    }, [])

  return (
    <div className='counterBack'>
        <h2>{time}</h2>
        <h3>TO GET TO THE TARDIS</h3>
    </div>
  )
}

export default CounterBack