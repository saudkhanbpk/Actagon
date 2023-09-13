import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import rectangle from '../../../assets/Rectangle.png';

const SplitAmount = () => {
    return (
        <div className="bg-white px-2 md:p-8 lg:p-12 xl:p-16">
            <div className="flex justify-between items-center py-2">
                <h2 className="text-blueButtonColor flex items-center font-medium text-base">
                    <MdOutlineArrowBackIosNew />
                    <span className="ml-2">Back</span>
                </h2>
                <h2 className="text-blueButtonColor font-medium text-base">Cancel</h2>
            </div>

            <div className="flex flex-col items-center pt-6">
                <div className="flex justify-center items-center">
                    <div className="px-2">
                        <div><img src={rectangle} alt="chat" /></div>
                    </div>
                    <div className="px-2">
                        <div><img src={rectangle} alt="chat" /></div>
                    </div>
                    <div className="px-2">
                        <div><img src={rectangle} alt="chat" /></div>
                    </div>
                    <div className="px-2">
                        <div><img src={rectangle} alt="chat" /></div>
                    </div>

                </div>
                <div className="pt-8">
                    <h2 className="text-textColorBlack font-medium text-2xl md:text-3xl xl:text-4xl">$100.00</h2>
                </div>

                <span className='text-[#817F80] font-normal text-sm mt-7'>05 pepole, $25.00 each</span>

                <div className="relative mt-4">
                    <input
                        type="text"
                        className="border border-[#C6C6C8] rounded-lg py-2 px-12 w-full"
                        placeholder="Dinner"
                    />
                </div>
                <button className="mt-4 w-full md:w-[260px] bg-blueButtonColor text-[white] font-medium py-2 rounded-lg">
                    Request
                </button>
            </div>
        </div>
    );
};

export default SplitAmount;
