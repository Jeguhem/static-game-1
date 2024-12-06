'use client'
import Image from 'next/image'
import React from 'react'
import frost from "@public/images/Frost.svg"
import skarlet from "@public/images/Skarlet.svg"
import shangT from "@public/images/Shang Tsung.svg"
import kitana from "@public/images/Kitana 1.svg"
import NavBar from './NavBar'
import chevronleft from "@public/images/chevron left.svg"
import chevronright from "@public/images/chevron right.svg"
import SpinMotion from './SpinMotion'


function Hero() {

  const handleClick = (value:number) =>{
    console.log(value)
  } 

  return (
    <div>
      <div className='gradient-bg  h-screen overflow-y-hidden'>
      <NavBar logo="/images/frost logo.svg"/>
       <div className=' relative flex flex-col  items-center '>
        <Image  src={frost} alt='' width={480} height={539} className='absolute z-[2] '/>
        <SpinMotion className='text-[200px] text-white text-center font-extrabold z-[1]'><p className='text-[200px] text-white text-center font-extrabold'>FROST</p></SpinMotion>
        <div className='flex justify-between w-full max-w-[400px] lg:max-w-[1000px]'>
          <div className='w-[40px] h-[40px] rounded-full bg-[#0F92F0] hover:bg-[#0C78C2] active:opacity-55 flex items-center justify-center' onClick={handleClick(1)}><Image src={chevronleft} alt='' width={10} height={10} /></div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#0F92F0] hover:bg-[#0C78C2] active:opacity-55 flex items-center justify-center' onClick={handleClick(1)}><Image src={chevronright} alt='' width={10} height={10} /></div>
        </div>
      </div>
      </div>    

{/* Skarlet */}
<div className='red-gradient-bg  h-screen z-10 overflow-y-hidden'>
      <NavBar logo="/images/red logo.svg"/>
       <div className=' relative flex flex-col  items-center '>
        <Image  src={skarlet} alt='' width={550} height={439} className='absolute z-[15] '/>
        <p className='text-[200px] text-white text-center font-extrabold'>SKARLET</p>
        <div className='flex justify-between w-full max-w-[400px] lg:max-w-[1000px]'>
          <div className='w-[40px] h-[40px] rounded-full bg-[#A72424] hover:bg-[#8E1E1E] active:opacity-55 flex items-center justify-center' onClick={handleClick(2)}><Image src={chevronleft} alt='' width={10} height={10} /></div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#A72424] hover:bg-[#8E1E1E] active:opacity-55 flex items-center justify-center' onClick={handleClick(2)}> <Image src={chevronright} alt='' width={10} height={10} /></div>
        </div>
      </div>
      </div>    


      {/* shang T */}

      <div className='yellow-gradient-bg h-screen z-20 overflow-y-hidden'>
      <NavBar logo="/images/yellow logo.svg"/>
       <div className=' relative flex flex-col  items-center '>
        <Image  src={shangT} alt='' width={510} height={439} className='absolute z-[25] '/>
        <p className='text-[200px] text-white text-center font-extrabold'>SHANG T</p>
        <div className='flex justify-between w-full max-w-[400px] lg:max-w-[1000px]'>
          <div className='w-[40px] h-[40px] rounded-full bg-[#C7BA44] hover:bg-[#AFA23A] active:opacity-55 flex items-center justify-center' onClick={handleClick(3)}><Image src={chevronleft} alt='' width={10} height={10} /></div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#C7BA44] hover:bg-[#AFA23A] active:opacity-55 flex items-center justify-center' onClick={handleClick(3)}><Image src={chevronright} alt='' width={10} height={10} /></div>
        </div>
      </div>
      </div> 


         {/*  Kitana */}

         <div className='blue-gradient-bg h-screen z-[30] overflow-y-hidden'>
      <NavBar logo="/images/blue logo.svg"/>
       <div className=' relative flex flex-col  items-center '>
        <Image  src={kitana} alt='' width={450} height={439} className='absolute z-[35] '/>
        <p className='text-[200px] text-white text-center font-extrabold'>KITANA</p>
        <div className='flex justify-between w-full max-w-[400px] lg:max-w-[1000px]'>
          <div className='w-[40px] h-[40px] rounded-full bg-[#0F92F0] hover:bg-[#0C78C2] active:opacity-55 flex items-center justify-center' onClick={handleClick(4)}><Image src={chevronleft} alt='' width={10} height={10} /></div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#0F92F0] hover:bg-[#0C78C2] active:opacity-55 flex items-center justify-center' onClick={handleClick(4)}><Image src={chevronright} alt='' width={10} height={10} /></div>
        </div>
      </div>
      </div> 
    </div>
    
  )
}

export default Hero