import React from 'react'

import { RxCross2 } from "react-icons/rx";
import { LuTrendingUp } from "react-icons/lu";
import { FaEthereum } from "react-icons/fa6";

import '../styles/common.css'

function TokenBox({ setShowtoken, showtoken }: any) {
    return (
        <div className='absolute inset-0  flex items-center justify-center z-50'>
            <div className='bg-[#13130A] h-[90vh] w-[25vw] border-[#555555] border-1 rounded-2xl p-3'>
                {/* top-section */}
                <div className='flex items-center justify-between'>
                    <p className='font-bold text-1xl'>Select a token</p>
                    <RxCross2 className='cursor-pointer' onClick={() => setShowtoken(!showtoken)} />
                </div>

                {/* middle section */}
                <div className='flex items-center gap-3 mt-5 sticky'>
                    <LuTrendingUp />
                    <p className='text-1xl text-[#868686] font-bold'>Tokens by 24H volume</p>
                </div>

                {/* token list */}
                <div className='flex flex-col gap-2 mt-3'>
                    <div className='flex items-center gap-3 mt-2'>
                        <FaEthereum className='btcicon' />
                        <div className='flex flex-col'>
                            <p className='font-bold'>Ethereum</p>
                            <p className='text-[#868686]'>ETH</p>
                        </div>
                    </div>





                    <div className='flex items-center gap-3 mt-2'>
                        <FaEthereum className='btcicon' />
                        <div className='flex flex-col'>
                            <p className='font-bold'>Ethereum</p>
                            <p className='text-[#868686]'>ETH</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <FaEthereum className='btcicon' />
                        <div className='flex flex-col'>
                            <p className='font-bold'>Ethereum</p>
                            <p className='text-[#868686]'>ETH</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <FaEthereum className='btcicon' />
                        <div className='flex flex-col'>
                            <p className='font-bold'>Ethereum</p>
                            <p className='text-[#868686]'>ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenBox