import Image from 'next/image'
import React from 'react'
// import frostlogo from "@public/images/frost logo.svg"
import chevrondown from "@public/images/chevron down.svg"

interface NavBarProps {
  logo:string
}

function NavBar({logo}:NavBarProps) {
  return (
    <div className='flex text-white justify-between items-center m-5 mx-[160px]'>
        <Image src={logo} alt='' width={33.85} height={43.88} />
        <div className='flex gap-7 items-center text-[12px] font-extrabold'>
            <div><p className=''>Game</p></div>
            <div><p className=''>Contact</p></div>
            <div className='flex gap-2 items-center'><p className=''>Company</p><Image src={chevrondown} alt='' width={8} height={3} /></div>
        </div>
    </div>
  )
}

export default NavBar