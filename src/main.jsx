import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Chrono from './components/Chrono/Chrono'
import CounterBack from './components/CounterBack/CounterBack'
import DigitalWatch from './components/DigitalWatch/DigitalWatch'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<DigitalWatch/>}/>
          <Route path='/CounterBack' element={<CounterBack/>}/>
          <Route path='/Chrono' element={<Chrono/>}/>
          <Route path='*' element={
            <main>
              <div className='diverror'>
              <img src='/public/images/pngfind.com-dalek-png-6811996.png' alt='dalek'/>
              <h2 className='error'>Daleks probably destroyed this page!</h2>
              <img src='/public/images/pngfind.com-dalek-png-6811996.png' alt='dalek'/></div>
            </main>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
