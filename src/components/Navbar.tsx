import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import logo from '../assets/logo1.png'

function Navbar() {
  return (
    <div className='flex justify-between item-center max-h-[100px]  pt-6'>
      <div className='flex  item-center w-[30%]'>
        <img src={logo} className='w-[30%] h-[30%] object-contain' />
        <div className='flex  item-center gap-x-3'>
          <p className='text-regal-pink font-bold inline '>Multiswap</p>
          <p className='font-medium'>Trade</p>
          <p className='font-medium'>Explore</p>
        </div>
      </div>
      <div className='flex item-center gap-x-6 pr-2'>
        <BsThreeDots className="mt-2" />
        <button className='bg-[#FF37C7] h-[30px] w-[80px] rounded-xl'>Connect</button>
      </div>
    </div>


  )
}

export default Navbar;