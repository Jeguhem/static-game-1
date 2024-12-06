import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Skarlet from './skarlet'


function Main() {
  return (
    <div className='gradient-bg border h-screen overflow-y-hidden  '>
       <div>
        <NavBar logo="/images/frost logo.svg"/>
        <Skarlet />
      </div>
    </div>
    
  )
}

export default Main