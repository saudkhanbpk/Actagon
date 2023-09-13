import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import rectangle from '../../../assets/Rectangle.png';

const SlipPayment = () => {
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
            <div className="px-4 py-2 text-center flex flex-col justify-center items-center">
                <img src={rectangle} alt="User Avatar" className="w-16  md:w-32 md:h-32 xl:w-48 xl:h-48 rounded-full" />
                <h2 className="text-textColorBlack font-medium text-lg md:text-xl xl:text-2xl mt-4">Sameer Khan</h2>
                <h2 className="text-[#63BF84] font-medium text-3xl py-5">$100.00</h2>
            </div>



            <div className='px-3' >
                <div className="bg-[#FFF] py-2" style={{ borderRadius: '12px 12px 12px 12px' }}>
                    <div className=" flex items-center" style={{ borderBottom: '1px solid #C6C6C8', }}>
                        <span className="w-full py-2 px-3 border-none  font-medium text-textColorBlack text-base rounded-t-md ">Card number</span>
                        <span className="w-full py-2 px-10 border-none  font-normal text-[#817F80] text-base rounded-t-md ">. . . . 6482</span>
                    </div>
                    <div className=" flex items-center" style={{ borderBottom: '1px solid #C6C6C8', }}>
                        <span className="w-full py-2 px-3 border-none  font-medium text-textColorBlack text-base rounded-t-md ">What’s for</span>
                        <span className="w-full py-2 px-10 border-none  font-normal text-[#817F80] text-base rounded-t-md ">Friends Trip</span>
                    </div>
                    <div className=" flex items-center" style={{ borderBottom: '1px solid #C6C6C8', }}>
                        <span className="w-full py-2 px-3 border-none  font-medium text-textColorBlack text-base rounded-t-md ">Paid by</span>
                        <span className="w-full py-2 px-10 border-none  font-normal text-[#817F80] text-base rounded-t-md ">Your name</span>
                    </div>
                    <div className=" flex items-center" >
                        <span className="py-2 px-3 border-none  font-medium text-textColorBlack text-base rounded-t-md ">Date</span>
                        <span className="w-full py-2 px-10 border-none  font-normal text-[#817F80] text-base rounded-t-md ">Aug,10,2022 12:20 PM</span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SlipPayment;
