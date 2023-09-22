import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const DateTimeSel = () => {

    const [date, setDate] = useState(new Date());

    return (
        <div className='bg-[#F2F2F6] h-screen'>
            <div className="px-4 py-2 flex justify-between">
                <h2 className="text-blueButtonColor flex items-center font-medium text-base">
                    <MdOutlineArrowBackIosNew />
                    <span className="ml-2">Back</span>
                </h2>
                <h2 className="text-textColorBlack font-medium text-base">Reschedule</h2>
                <Link to='/splitAmount'>
                    <h2 className="text-blueButtonColor font-medium text-base">Done</h2>
                </Link>
            </div>

            <div className="px-1 pb-4  md:w-96 mt-3 mx-3">
                <div className="pt-2">
                    <input
                        type="text"
                        className="w-full py-2 px-2 border-none focus:border-transparent focus:outline-none font-normal text-textColorBlack text-base rounded-md border-gray-300"
                        placeholder="Title:"
                    />
                </div>
            </div>

            <div className="bg-[#FFFFFF] mx-3 rounded-xl p-3 my-4">
                <div className="flex justify-center items-center ">
                    <div className="flex items-center">
                        <div className="text-xl text-[#F00] font-medium mx-2">
                            <p>Date & Time</p>
                        </div>
                    </div>
                </div>
                <hr className='text-[#C6C6C8] mt-4' />
                <div className="my-2 py-2">
                    <div>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                    <hr className='text-[#C6C6C8] mt-4' />
                    <div
                        className="text-center p mt-3 flex items-center justify-between"
                    >
                        <p className="text-base font-medium text-[black]">Time</p>
                        <div className="flex items-center justify-center">
                            <input
                                type="text"
                                style={{ background: 'rgba(238, 238, 239)' }}
                                className="w-20 h-10  rounded-lg  text-lg text-[black] text-center"
                                placeholder="12:00"
                            />
                            <select
                                className="w-16 h-10 border rounded-lg border-[lightgray] text-lg text-[black] ml-2"
                            >
                                <option value="am">AM</option>
                                <option value="pm">PM</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DateTimeSel
