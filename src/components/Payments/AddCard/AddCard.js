import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const AddCard = () => {
    return (
        <div className="bg-[#F2F2F6] min-h-screen">
            <div className="px-4 py-2 flex justify-between">
                <h2 className="text-blueButtonColor flex items-center font-medium text-base">
                    <MdOutlineArrowBackIosNew />
                    <span className="ml-2">Back</span>
                </h2>
                <h2 className="text-textColorBlack font-medium text-base">Add Card</h2>
                <h2 className="text-blueButtonColor font-medium text-base">Add</h2>
            </div>
            <div className="px-4 py-10 text-center">
                <h2 className="text-textColorBlack text-3xl font-medium">Card Details</h2>
            </div>

            <div className="px-4 pb-4 md:w-96 mx-auto">
                <div className="">
                    <input
                        type="text"
                        style={{ borderBottom: '1px solid #C6C6C8' }}
                        className="w-full py-2 px-3 border-none focus:border-transparent focus:outline-none font-normal text-[#817F80] text-base rounded-t-md border-b-1 border-gray-300"
                        placeholder="Card number"
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        style={{ borderBottom: '1px solid #C6C6C8' }}
                        className="w-full py-2 px-3 border-none focus:border-transparent focus:outline-none font-normal text-[#817F80] text-base border-b-1 border-gray-300"
                        placeholder="MM/YY"
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        style={{ borderBottom: '1px solid #C6C6C8' }}
                        className="w-full py-2 px-3 border-none focus:border-transparent focus:outline-none font-normal text-[#817F80] text-base border-b-1 border-gray-300"
                        placeholder="Security Code"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="w-full py-2 px-3 border-none focus:border-transparent focus:outline-none font-normal text-[#817F80] text-base rounded-b-md border-gray-300"
                        placeholder="Zip Code"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddCard;
