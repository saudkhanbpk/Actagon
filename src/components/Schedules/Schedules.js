import React, { useState, useEffect } from "react";
import plus from "../../assets/plus.png";
import { Link } from "react-router-dom";
import Rectangle from "../../assets/Framegal.png";
import fotbal from "../../assets/fotbal.png";
import game from "../../assets/game.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import coffee from "../../assets/coffee.png";
import { startOfWeek, endOfWeek } from "date-fns";
import { IoIosArrowForward } from "react-icons/io";
import { getSchedule } from "../../service/Auth";
const cards = [
    {
        img: Rectangle,
        header: "Rihanna",
        title: "Location",
        date: "2:27 pm - 2:27 pm",
    },
    {
        img: fotbal,
        header: "Football",
        title: "Four Barrell Coffee",
        date: "2:27 pm - 2:27 pm",
    },
    {
        img: game,
        header: "Game",
        date: "2:27 pm - 2:27 pm",
    },
    {
        img: coffee,
        header: "Coffee Date",
        title: "Four Barrell Coffee",
        date: "2:27 pm - 2:27 pm",
    },
];

const Schedules = () => {
    const [cards, setCards] = useState([]);
    const [value, onChange] = useState(new Date());
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


    const handleGet = async () => {

    };

    useEffect(() => {
        getSchedule({ userId: user?._id, dateAndTime: value })
            .then((res) => {
                setCards(res.data.data);
            })
            .catch((error) => {
                console.log("error:", error);
            });
    }, [value]);



    return (
        <div>
            <div className="flex items-center justify-center mt-2 px-4  border-b-[1px] border-gray-200">
                <h1 className="text-xl pl-12 font-medium text-center  mx-auto">
                    Events
                </h1>
                <Link to="/addschedule">
                    <button className="bg-blue-500  text-white rounded-full w-10 h-10 flex items-center font-[20px] justify-end">
                        <img src={plus} alt="plus icon" />
                    </button>
                </Link>
            </div>

            <div className="px-3">
                <p className="text-textColorBlack font-medium font-xl">
                    Friday June 12, 2023
                </p>
            </div>
            <div className="flex flex-col px-1 overflow-x-auto">
                <Calendar onChange={onChange} value={value}
                />
            </div>

            <div className="px-3">
                <div style={{ borderRadius: "16px" }}>
                    {cards.length > 0 ? (
                        cards.map((items, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-full flex mt-5  overflow-hidden bg-[#FFF]"
                                    style={{
                                        height: "100px",
                                        borderRadius: "16px",
                                        boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.08)",
                                    }}
                                >
                                    <img src={items.img} alt="Image" />
                                    <div className="w-full px-3">
                                        <div className="flex w-full mt-2 text-[#8A9099] items-center text-xs justify-between">
                                            <div className="text-textColorBlack font-medium text-base">
                                                <h2>{items.title}</h2>
                                            </div>
                                            <div className="flex items-center">
                                                <span>
                                                    <IoIosArrowForward className="font-normal text-xl text-slate-800" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-base font-normal text-[#817F80] leading-4">
                                                {items.title}
                                            </p>
                                            <p className="text-base mt-2 font-normal text-[#817F80] leading-5">
                                                {items.dateAndTime}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-base font-normal text-[#817F80] leading-4 mt-5">
                            No schedule for today
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Schedules;






