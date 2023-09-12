import React from 'react';
import Card from '../../../assets/paymentcard.png';
import Rectangle from '../../../assets/Rectangle.png';
import { BiDollar } from 'react-icons/bi'
import { FiArrowDownLeft } from 'react-icons/fi'
import { FiArrowUpRight } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
function Transition() {
    return (
        // cutvihbjnk
        <div className="max-w-sm px-3 mx-auto bg-[#F2F2F6] shadow-lg rounded-lg overflow-hidden">
            <img src={Card} alt="Transition Card Image" className="w-full h-auto" />
            <div className="flex py-4">
                <button
                    style={{ borderRadius: '12px 0px 0px 12px', color: '#63BF84' }}
                    className="bg-[#FFFFFF] w-full text-lg flex px-4 items-center font-medium py-3"
                >
                    <BiDollar /><FiArrowDownLeft />
                    Request
                </button>
                <button
                    style={{ borderRadius: '0px 12px 12px 0px', color: '#3478F6' }}
                    className="bg-[#FFFFFF] w-full text-lg flex px-4 items-center font-medium py-3">
                    <BiDollar /><FiArrowUpRight />
                    Pay
                </button>
            </div>

            <div>
                <h2 className='text-textColorBlack text-base font-medium'>Transactions</h2>
            </div>

            <div className="w-full flex px-3 py-3 bg-[#FFF]">
                <img src={Rectangle} alt="Image"/>
                <div className='w-full px-2'>
                    <div className="flex w-full text-[#8A9099] items-center text-xs justify-between">
                        <div className="text-textColorBlack font-medium text-base">
                            <h2>Sameer</h2>
                        </div>
                        <div className="flex items-center">
                            <h2 className='font-normal text-textColorBlack text-base'>$23.65</h2>
                            <span><IoIosArrowForward className="font-normal text-base text-slate-800" /></span>
                        </div>
                    </div>
                    <div>
                        <p className="text-base font-normal text-[#817F80] leading-4">Reason</p>
                        <p className="text-base font-normal text-[#817F80] leading-5">Aug 10, 2022</p>
                    </div>
                </div>
                <div className="w-64 oxs:w-full h-px absolute left-0 bottom-0 bg-[#E8E9EB] "></div>
            </div>

        </div>
    );
}

export default Transition;
