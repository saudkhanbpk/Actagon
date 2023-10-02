import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

function ChangeUserName() {
  return (
    <>
      <Link to='/yourUserName' style={{textDecoration:'none'}}>
        <h2 className="text-blueButtonColor px-2 py-2 flex items-center font-medium text-base">
          <MdOutlineArrowBackIosNew />
          <span className="ml-0">Back</span>
        </h2>
      </Link>
      <div className="min-h-screen flex flex-col mt-20  items-center">
        <p className="text-textColorBlack text-center text-xl font-medium leading-5">
          Change your username
        </p>
        <div className="mt-10 w-full mx-2">
          <input type="text" placeholder="Enter your name" className="flex mx-2 w-[95%] h-auto rounded-xl  pt-3 pr-2 pb-3 pl-2 bg-textInputBackgroundColor " />
        </div>
        <div className="mt-20 w-full mx-2">
          <button className=" w-[95%] h-[50px] rounded-xl mx-2  pt-3 pr-5 pl-4 bg-blueButtonColor text-[#FFFFFF]">
            <p className="text-white text-center text-xl font-semibold leading-6">
              Update
            </p>
          </button>
        </div>
      </div>
    </>
    // bugs fixing 
  );
}

export default ChangeUserName;
