import Image from 'next/image'
import React from 'react'
import skarlet from "@public/images/Skarlet.svg"

function Skarlet() {
  return (
    <div className='relative flex justify-center '>
        <Image  src={skarlet} alt='' width={550} height={439} className='absolute z-20 '/>
        <p className='text-[200px] text-white text-center font-extrabold'>SKARLET</p>
        
    </div>
    
  )
}

export default Skarlet