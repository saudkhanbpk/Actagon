import React from "react";
import Card from "../../../assets/paymentcard.png";
import Rectangle from "../../../assets/Rectangle.png";
import { BiDollar } from "react-icons/bi";
import { FiArrowDownLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
function Transition() {
    const cards = [
        {
            img: Rectangle,
            header: "Sameer",
            title: "Reason",
            date: "Aug 10,2022",
            price: "$23.65",
        },
        {
            img: Rectangle,
            header: "Imran",
            title: "Reason",
            date: "Aug 10,2022",
            price: "$23.65",
        },
        {
            img: Rectangle,
            header: "Rehman",
            title: "Reason",
            date: "Aug 10,2022",
            price: "$23.65",
        },
        {
            img: Rectangle,
            header: "Rehman",
            title: "Reason",
            date: "Aug 10,2022",
            price: "$23.65",
        },
        {
            img: Rectangle,
            header: "Rehman",
            title: "Reason",
            date: "Aug 10,2022",
            price: "$23.65",
        },
        {
            img: Rectangle,
            header: "Rehman",
            title: "Reason",
            date: "Aug 10,2022",
            price: "$23.65",
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center py-3">
                <h2 className='text-textColorBlack text-base font-medium'>
                    Wallet
                </h2>
                <hr style={{ width: '300px', height: '5px', background: '#FFFFFF' }} />

            </div>
            <div className="max-w-sm px-3 py-2 mx-auto bg-[#F2F2F6] shadow-lg rounded-lg overflow-hidden">
                <img src={Card} alt="Transition Card Image" className="w-full h-auto" />
                <div className="flex py-4 gap-1">
                    <button
                        style={{ borderRadius: "12px 0px 0px 12px", color: "#63BF84" }}
                        className="bg-[#FFFFFF] w-full text-lg flex px-4 items-center font-medium py-3"
                    >
                        <BiDollar />
                        <FiArrowDownLeft />
                        Request
                    </button>
                    <button
                        style={{ borderRadius: "0px 12px 12px 0px", color: "#3478F6" }}
                        className="bg-[#FFFFFF] w-full text-lg flex px-4 items-center font-medium py-3"
                    >
                        <BiDollar />
                        <FiArrowUpRight />
                        Pay
                    </button>
                </div>

                <div>
                    <h2 className="text-textColorBlack text-base font-medium">
                        Transactions
                    </h2>
                </div>
                <div className="overflow-y-auto max-h-96" style={{ borderRadius: '12px 12px 0px 0px' }}>
                    {cards.map((items, index) => {
                        return (
                            <div key={index} className="w-full flex px-3 py-3 bg-[#FFF]" >
                                <img src={items.img} alt="Image" />
                                <div className="w-full px-2">
                                    <div className="flex w-full text-[#8A9099] items-center text-xs justify-between">
                                        <div className="text-textColorBlack font-medium text-base">
                                            <h2>{items.header}</h2>
                                        </div>
                                        <div className="flex items-center">
                                            <h2 className="font-normal text-textColorBlack text-base">
                                                {items.price}
                                            </h2>
                                            <span>
                                                <IoIosArrowForward className="font-normal text-xl text-slate-800" />
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-base font-normal text-[#817F80] leading-4">
                                            {items.title}
                                        </p>
                                        <p className="text-base font-normal text-[#817F80] leading-5">
                                            {items.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Transition;
