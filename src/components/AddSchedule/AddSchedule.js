import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import Frame3 from "./../../assets/Frame3.png";
import Frame2 from "./../../assets/Frame2.png";
import Frame1 from "./../../assets/Frame1.png";
import Frame from "./../../assets/Frame.png";
import { Link } from "react-router-dom";
import {MdOutlineArrowBackIosNew} from 'react-icons/md'

function AddSchedule() {
  return (
    <>
      <div className="flex bg-blue-500 text-white mt-2 px-2 ">
        <Link to=''>
        <h2 className="text-blueButtonColor py-2 flex items-center font-medium text-base">
          <MdOutlineArrowBackIosNew />
          <span className="ml-1">Back</span>
        </h2>
      </Link>
            <h3 className="text-2xl pl-1 font-semibold text-center  mx-auto">Add Schedule</h3>
            <Link to='/newmessage'>       
            <button className="text-blueButtonColor text-white font-semibold rounded-full w-10 h-10 flex items-center  justify-end">
          Done
         </button>
         </Link>

         </div>

      <div className="px-1 pb-4 rounded-xl shadow-2xl md:w-96 mt-3 mx-3">
                <div className="pt-2">
                    <input
                        type="text"
                        style={{ borderBottom: '1px solid #C6C6C8' }}
                        className="w-full py-2 px-2 border-none focus:border-transparent focus:outline-none font-normal text-[#000] text-base rounded-t-md border-gray-300"
                        placeholder="Title"
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        
                        className="w-full py-2 px-2 border-none focus:border-transparent focus:outline-none font-normal text-[#000] text-base "
                        placeholder="URL"
                    />
                </div>
                
            </div>


      <div className="flex justify-between items-center mx-3 shadow-2xl rounded-xl p-3 my-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={Frame3} alt="icon" />
          </div>
          <div className="text-lg text-[black] font-semibold mx-2">
            <p>Date & Time</p>
          </div>
        </div>
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value={true} className="sr-only peer" />
            <div className="w-11 h-6 bg-[lightgray] peer-focus:outline-none  rounded-full peer dark:bg-[lightgray] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all dark:border-[gray] peer-checked:bg-[green]" />
          </label>
        </div>
      </div>

      <div className=" rounded-xl mx-3 shadow-2xl">
        <div className="flex justify-between items-center border-b-[1px]   p-3">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={Frame2} alt="icon" />
            </div>
            <div className="text-lg text-[black] font-semibold mx-2">
              <p>Date & Time</p>
            </div>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value={true} className="sr-only peer" />
              <div className="w-11 h-6 bg-[lightgray] peer-focus:outline-none  rounded-full peer dark:bg-[lightgray] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all dark:border-[gray] peer-checked:bg-[green]" />
              </label>
          </div>
        </div>
        <div className="flex justify-between items-center  p-3">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={Frame1} alt="icon" />
            </div>
            <div className="text-lg text-[black] font-semibold mx-2">
              <p>Date & Time</p>
            </div>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value={true} className="sr-only peer" />
              <div className="w-11 h-6 bg-[lightgray] peer-focus:outline-none  rounded-full peer dark:bg-[lightgray] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all dark:border-[gray] peer-checked:bg-[green]" />
              </label>
          </div>
        </div>
        
      </div>

      <div className="flex justify-between items-center mx-3 shadow-2xl rounded-xl p-3 my-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={Frame} alt="icon" />
          </div>
          <div className="text-lg text-[black] font-semibold mx-2">
            <p>Date & Time</p>
          </div>
        </div>
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value={true} className="sr-only peer" />
            <div className="w-11 h-6 bg-[lightgray] peer-focus:outline-none  rounded-full peer dark:bg-[lightgray] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[gray] after:border after:rounded-full after:bg-[white] after:h-5 after:w-5 after:transition-all dark:border-[gray] peer-checked:bg-[green]" />
            </label>
        </div>
      </div>
    </>
  );
}

export default AddSchedule;