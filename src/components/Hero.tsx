import Image from 'next/image'
import React from 'react'
import frost from "../../../public/images/Frost.svg"

function Hero() {
  return (
    <div className='relative flex justify-center '>
        <Image  src={frost} alt='' width={480} height={539} className='absolute z-20 '/>
        <p className='text-[200px] text-white text-center font-extrabold'>FROST</p>
        
    </div>
    
  )
}

export default Hero