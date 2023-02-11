import { useState } from 'react'

import DigitalWatch from './components/DigitalWatch/DigitalWatch'

import './App.css'
import { NavLink, Outlet } from 'react-router-dom'


function App() {
  

  return (
    <div className="App">
      <nav>
        <NavLink to=''>Digital Watch</NavLink>
        <NavLink to='CounterBack'>Counter Back</NavLink>
        <NavLink to='Chrono'>Chonometer</NavLink>
      </nav>
      <main>
        <span><img src='/images/doctor-tardis.png'/></span>
        <Outlet/>
      </main>
      <footer><div className='gradient'></div></footer>

    </div>
  )
}

export default App
