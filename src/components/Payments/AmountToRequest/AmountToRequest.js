import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import rectangle from '../../../assets/Rectangle.png';

const amountToRequest = () => {
  return (
    <div className="bg-white p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="flex justify-between items-center">
        <h2 className="text-blueButtonColor flex items-center font-medium text-base">
          <MdOutlineArrowBackIosNew />
          <span className="ml-2">Back</span>
        </h2>
        <h2 className="text-blueButtonColor font-medium text-base">Cancel</h2>
      </div>

      <div className="flex flex-col items-center pt-6">
        <img src={rectangle} alt="User Avatar" className="w-16  md:w-32 md:h-32 xl:w-48 xl:h-48 rounded-full" />
        <h2 className="text-textColorBlack font-medium text-lg md:text-xl xl:text-2xl mt-4">Sameer Khan</h2>
        <h2 className="text-[#817F80] font-normal text-sm">@sameerkhan6677</h2>

        <div className="pt-3">
          <h2 className="text-textColorBlack font-medium text-2xl md:text-3xl xl:text-4xl">$10.00</h2>
        </div>

        <div className="relative mt-4">
          <input
            type="text"
            className="border border-[#C6C6C8] rounded-lg py-2 px-12 w-full"
            placeholder="For Food"
          />
        </div>
        <button className="mt-4 w-full md:w-[260px] bg-blueButtonColor text-[white] font-medium py-2 rounded-lg">
          Request
        </button>
      </div>
    </div>
  );
};

export default amountToRequest;
