import React, { useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import Calendar from 'react-calendar';
import './DataSelSchedul.css';
import frames from '../../../assets/Frames.png'
const DateSelSchedul = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="flex py-2 px-2 justify-between items-center">
        <h2 className="text-blueButtonColor flex items-center font-medium text-base">
          <MdOutlineArrowBackIosNew />
          <span className="ml-2">Back</span>
        </h2>
        <h2 className="text-blueButtonColor font-medium text-base">Cancel</h2>
      </div>

      <div className="px-3">
        <div>
          <Calendar
            onChange={setDate}
            value={date}
          />
        </div>

        <div className="flex justify-between bg-[#7676801F] items-center rounded-xl p-3 my-4">
          <div className="flex items-center">
            <div className="flex items-center p-1 bg-blueButtonColor rounded-md">
              <img src={frames} alt="icon" />
            </div>
            <div className="text-lg text-[black] font-medium mx-2">
              <p>Recurring Payment</p>
            </div>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value={true} className="sr-only peer" />
              <div className="w-11 h-6 rounded-full  dark:bg-[#34C759] peer-checked:after:translate-x-full peer-checked:after:border-[white] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[white] after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg">Every month</p>
          <div className="flex items-center text-2xl">
            <input
              type="radio"
              id="radioButton"
              name="radioButton"
              className="mr-2"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg">Every week</p>
          <div className="flex items-center text-2xl">
            <input
              type="radio"
              id="radioButton"
              name="radioButton"
              className="mr-2"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg">Every year</p>
          <div className="flex items-center text-2xl">
            <input
              type="radio"
              id="radioButton"
              name="radioButton"
              className="mr-2"
            />
          </div>
        </div>

        <p className='text-[#C5C5C6] text-sm leading-5 font-normal text-center pt-10  '>Muhammad Umer will get paid
          <span className='text-[#817F80]'> $10.00</span> on
          <span className='text-[#817F80]'>12</span> of every month.</p>

        <button className="mt-5 w-full md:w-[260px] bg-blueButtonColor text-[white] font-medium py-2 rounded-lg">
          Pay on March 12
        </button>
      </div>

    </div>
  );
};

export default DateSelSchedul;
