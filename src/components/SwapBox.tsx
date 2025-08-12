import React, { useState } from 'react'

import { FaEthereum } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import '../styles/common.css'

import TokenBox from './TokenBox';


function SwapBox() {
    const [showtoken, setShowtoken] = useState<boolean>(false)
    function toogleTokenBox() {
        setShowtoken(!showtoken)
    }
    return (
        <div className='flex justify-center items-center flex-col'>

            <div className="mt-5">
                <p className='text-center text-4xl font-medium text-regal-pink'>Swap anytime,</p>
                <p className='text-center text-4xl font-medium text-regal-pink'>anywhere</p>
            </div>
            <div className='min-h-[400px] min-w-[480px]  mt-5 rounded-xl bg-[#19191A]'>
                <div className='min-h-[160px] min-w-[450px] border-[1px] border-[#FFFFFF1F] rounded-3xl m-2 bg-[#13130A]'>
                    <p className='p-3 text-[15px] color-[#]'>Sell</p>
                    <div className='solbox m-4 flex items-center justify-between'>
                        <input placeholder="0" className='h-12 w-[80%] outline-none border-none solinput'></input>
                        <div className='flex justify-between gap-2 border-1 rounded-2xl border-[#555555] justify-center items-center p-1'>
                            <FaEthereum className='bg-[#1E90FF] rounded-2xl' />
                            <p className='font-bold'>ETH</p>
                            <IoIosArrowDown onClick={toogleTokenBox} />
                        </div>
                        {
                            showtoken ? (
                               <TokenBox showtoken={showtoken} setShowtoken={setShowtoken}/>
                            ) : (
                                <p></p>
                            )
                        }
                    </div>
                    <p className='ml-3 text-[14px]'>$0.0</p>
                </div>
                <div className='min-h-[160px] min-w-[450px] border-[1px] border-[#FFFFFF1F] rounded-3xl m-2 bg-[#100D1C]'>

                    <p className='p-3 text-[15px] color-[#]'>Buy</p>
                    <div className='solbox m-4 flex items-center justify-between'>
                        <div className='h-12 w-[80%] outline-none border-none solinput'>
                            <p className='text-[#555555]'>0</p>
                        </div>
                        <div className='flex justify-between gap-2 border-1 rounded-2xl border-[#555555] justify-center items-center p-1'>
                            <FaEthereum className='bg-[#1E90FF] rounded-2xl' />
                            <p className='font-bold'>ETH</p>
                            <IoIosArrowDown />
                        </div>

                    </div>
                    <p className='ml-3 text-[14px]'>$0.0</p>
                </div>
                <div className='min-h-[60px] min-w-[450px]  rounded-3xl m-2 bg-[#FF37C714] flex items-center justify-center'>
                    <button className='w-[100%] h-[100%] text-center flex items-center justify-center text-regal-pink font-bold' onClick={() => console.log('clicked')}>Get started</button>
                </div>
            </div>

        </div>

    )
}

export default SwapBox