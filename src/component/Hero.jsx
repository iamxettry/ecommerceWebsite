import React from 'react'
import { hero } from '../assets'
import Btn from './Btn'

const Hero = ({title}) => {
  return (
    <>
    <section className='w-full py-10'>
        <div className='w-4/5 md:w-3/5 mx-auto flex flex-col-reverse md:flex-row p-5 relative'>
            <div className='md:flex-1 py-5'>
                <p className='uppercase font-bold text-xs'>Welcome To</p>
                <h1 className='text-3xl tracking-wide font-bold'>{title}</h1>
                <p className='my-2 text-black text-opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, aliquid! Lorem ipsum dolor sit amet.</p>
                <div className='py-5'>
                    <Btn title="Shop Now" />
                </div>
            </div>
            <div className='md:flex-1 p-2 md:p-5 '>

                <div>
                    <img src={hero} alt="" />
                </div>
                <div className='absolute -z-20 bg-[#9C9CFF] right-0 top-0 h-24 w-24 md:w-48 md:h-48'></div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Hero